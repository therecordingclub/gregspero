
'use client';

import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage('Thank you for joining!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to connect. Please try again.');
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h3 style={styles.heading}>Stay Updated</h3>
                <p style={styles.text}>Join the mailing list for updates on new music, technology, and shows.</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                        disabled={status === 'loading' || status === 'success'}
                    />
                    <button
                        type="submit"
                        style={{ ...styles.button, opacity: status === 'loading' ? 0.7 : 1 }}
                        disabled={status === 'loading' || status === 'success'}
                    >
                        {status === 'loading' ? 'Joining...' : 'Join'}
                    </button>
                </form>

                {message && (
                    <p style={{
                        ...styles.message,
                        color: status === 'error' ? '#ff6b6b' : '#51cf66'
                    }}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 2rem',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #222',
        textAlign: 'center' as const,
    },
    container: {
        maxWidth: '500px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
        fontWeight: 300,
        letterSpacing: '-0.02em',
    },
    text: {
        fontSize: '1rem',
        color: '#888',
        marginBottom: '2rem',
        lineHeight: 1.5,
    },
    form: {
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        padding: '0.8rem 1rem',
        borderRadius: '4px',
        border: '1px solid #333',
        backgroundColor: '#111',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
    },
    button: {
        padding: '0.8rem 1.5rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'opacity 0.2s',
    },
    message: {
        marginTop: '1rem',
        fontSize: '0.9rem',
        fontWeight: 500,
    }
};

export default Newsletter;
