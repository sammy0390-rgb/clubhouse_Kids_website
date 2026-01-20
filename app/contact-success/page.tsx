import Link from 'next/link';

export default function ContactSuccess() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        maxWidth: '500px'
      }}>
        <div style={{
          fontSize: '48px',
          color: '#28a745',
          marginBottom: '20px'
        }}>✓</div>
        <h1 style={{
          color: '#333',
          fontSize: '28px',
          marginBottom: '15px'
        }}>Thank You!</h1>
        <p style={{
          color: '#666',
          fontSize: '16px',
          marginBottom: '25px'
        }}>
          Your message has been sent successfully. We&apos;ll get back to you as soon as possible!
        </p>
        <Link 
          href="/"
          style={{
            display: 'inline-block',
            backgroundColor: '#e91e63',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

