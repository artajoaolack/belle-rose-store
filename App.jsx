
import React from "react";

function BelleRoseStore() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#FDEEEF',
      color: '#6B1F3A',
      padding: '2rem',
      fontFamily: 'serif'
    }}>
      <header style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Belle Rose</h1>
        <p style={{ fontStyle: 'italic', color: '#A64661' }}>Pour qui s'épanouit</p>
      </header>
      <div style={{ textAlign: 'center' }}>
        <p>Loja online em construção. Em breve, novidades delicadas e apaixonantes ♡</p>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: '#A64661' }}>
        © 2025 Belle Rose • Desenvolvido com ♥ em Uberaba
      </footer>
    </main>
  );
}

export default BelleRoseStore;
