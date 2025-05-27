import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DeveloTech - Desenvolvimento de Software Sob Demanda</h1>
        <p>Bem-vindo ao nosso portfólio! Somos especialistas em soluções digitais personalizadas para o seu negócio.</p>
      </header>
      <main>
        <section>
          <h2>Sobre Nós</h2>
          <p>Somos uma plataforma dedicada ao desenvolvimento de sistemas, sites e aplicativos sob medida, focados em inovação, qualidade e agilidade.</p>
        </section>
        <section>
          <h2>Projetos Realizados</h2>
          <ul>
            <li>Sistema de Gestão Empresarial</li>
            <li>Aplicativo de Delivery Personalizado</li>
            <li>Plataforma E-commerce Integrada</li>
          </ul>
        </section>
        <section>
          <h2>Serviços</h2>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Desenvolvimento Mobile</li>
            <li>Consultoria em TI</li>
            <li>UX/UI Design</li>
          </ul>
        </section>
        <section>
          <h2>Contato</h2>
          <form className="contact-form">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Sua mensagem" required />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} DeveloTech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
