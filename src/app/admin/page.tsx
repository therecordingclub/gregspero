
'use client';

import React, { useState } from 'react';

export default function AdminPage() {
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [emails, setEmails] = useState<{ email: string; timestamp: string }[]>([]);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin }),
            });

            const data = await res.json();

            if (res.ok) {
                setIsAuthenticated(true);
                setEmails(data.emails);
            } else {
                setError('Invalid PIN');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    const copyToClipboard = () => {
        const emailList = emails.map(e => e.email).join(', ');
        navigator.clipboard.writeText(emailList);
        alert('Copied emails to clipboard!');
    };

    const exportCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Email,Date Joined\n"
            + emails.map(e => `${e.email},${new Date(e.timestamp).toLocaleString()}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isAuthenticated) {
        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>Admin Access</h1>
                <form onSubmit={handleLogin} style={styles.form}>
                    <input
                        type="password"
                        placeholder="Enter PIN"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.heading}>Mailing List ({emails.length})</h1>
                <div style={styles.actions}>
                    <button onClick={copyToClipboard} style={styles.outlineButton}>Copy Emails</button>
                    <button onClick={exportCSV} style={styles.primaryButton}>Export CSV</button>
                </div>
            </div>

            <div style={styles.list}>
                {emails.length === 0 ? (
                    <p style={styles.empty}>No subscribers yet.</p>
                ) : (
                    emails.map((sub, i) => (
                        <div key={i} style={styles.item}>
                            <span style={styles.email}>{sub.email}</span>
                            <span style={styles.date}>
                                {new Date(sub.timestamp).toLocaleDateString()} {new Date(sub.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        padding: '4rem 2rem',
        backgroundColor: '#050505',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '0',
        fontWeight: 300,
    },
    form: {
        display: 'flex',
        gap: '0.5rem',
    },
    input: {
        padding: '0.8rem',
        borderRadius: '4px',
        border: '1px solid #333',
        backgroundColor: '#111',
        color: '#fff',
        fontSize: '1rem',
    },
    button: {
        padding: '0.8rem 1.5rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    outlineButton: {
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: '1px solid #fff',
        backgroundColor: 'transparent',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    primaryButton: {
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#fff',
        color: '#000',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 600,
    },
    error: {
        color: '#ff6b6b',
        marginTop: '1rem',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '800px',
        alignItems: 'center',
        marginBottom: '2rem',
    },
    actions: {
        display: 'flex',
        gap: '1rem',
    },
    list: {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#111',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    item: {
        padding: '1rem',
        borderBottom: '1px solid #222',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    email: {
        fontWeight: 500,
        fontSize: '1.1rem',
    },
    date: {
        color: '#666',
        fontSize: '0.9rem',
    },
    empty: {
        padding: '2rem',
        textAlign: 'center' as const,
        color: '#666',
    }
};
