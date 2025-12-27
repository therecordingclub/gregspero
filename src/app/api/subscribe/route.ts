
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        try {
            // Attempt to insert
            await sql`
                INSERT INTO subscribers (email, timestamp) 
                VALUES (${email}, ${new Date().toISOString()}) 
                ON CONFLICT (email) DO NOTHING;
            `;
        } catch (error: any) {
            // If table doesn't exist (code 42P01), create it and retry
            if (error.code === '42P01' || error.message.includes('relation "subscribers" does not exist')) {
                console.log('Table does not exist, creating...');
                await sql`
                    CREATE TABLE IF NOT EXISTS subscribers (
                        email VARCHAR(255) PRIMARY KEY,
                        timestamp VARCHAR(64)
                    );
                `;
                // Retry insert
                await sql`
                    INSERT INTO subscribers (email, timestamp) 
                    VALUES (${email}, ${new Date().toISOString()}) 
                    ON CONFLICT (email) DO NOTHING;
                `;
            } else {
                throw error;
            }
        }

        return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
    } catch (error: any) {
        console.error('Subscription error:', error);
        return NextResponse.json({
            error: 'Internal server error',
            details: error.message,
            code: error.code
        }, { status: 500 });
    }
}
