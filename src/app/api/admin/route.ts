
import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Simple PIN for demonstration. In a real app, use environment variables.
const ADMIN_PIN = "ruthnew";

export async function POST(request: Request) {
    try {
        const { pin } = await request.json();

        if (pin !== ADMIN_PIN) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        try {
            const { rows } = await sql`SELECT * FROM subscribers ORDER BY timestamp DESC`;
            // Map rows to ensure correct shape (in case of DB column name differences, though here they match)
            const emails = rows.map(row => ({
                email: row.email,
                timestamp: row.timestamp
            }));
            return NextResponse.json({ emails });
        } catch (error: any) {
            // If table doesn't exist, return empty array
            if (error.code === '42P01' || error.message.includes('relation "subscribers" does not exist')) {
                return NextResponse.json({ emails: [] });
            }
            throw error;
        }

    } catch (error) {
        console.error('Admin error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
