
import styles from './About.module.css'; // Importa o CSS Module
import { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
function About() {
  useEffect(() => {

    document.title = "Gestão de Almoxarifado - Estoque Assistente";
  }, []);

  return (
    <div className={styles.containerAbout}>
    <div className={styles.aboutContainer}>
         <Navbar></Navbar>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Gestão de Almoxarifado nas Telecomunicações</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.ppage1}><a href="#introducao" className={styles.navLink}>Introdução</a></li>
            <li className={styles.ppage1}><a href="#importancia" className={styles.navLink}>Importância do Almoxarifado</a></li>
            <li className={styles.ppage1}><a href="#tecnologias" className={styles.navLink}>Tecnologias no Almoxarifado</a></li>
            <li className={styles.ppage1}><a href="#desafios" className={styles.navLink}>Desafios e Soluções</a></li>
            <li className={styles.ppage1}><a href="#futuro" className={styles.navLink}>O Futuro do Almoxarifado</a></li>
          </ul>
        </nav>
      </header>

      <h2 className={styles.sectionTitle}>Introdução ao Almoxarifado</h2>
      
      <section id="introducao" className={styles.section}>
        <p className={styles.ptitle}>O almoxarifado é o setor responsável por armazenar, controlar e distribuir os materiais e equipamentos necessários para o funcionamento de uma empresa de telecomunicações. Ele garante que os itens certos estejam disponíveis no momento certo, otimizando o fluxo de trabalho e evitando atrasos.</p>
      </section>

        <h2 className={styles.sectionTitle}>Importância do Almoxarifado nas Telecomunicações</h2>
      <section id="importancia" className={styles.section}>
        <ul>
          <li className={styles.ppage}><strong>Organização</strong>: O controle adequado dos estoques evita desperdício e falta de materiais essenciais.</li>
          <li className={styles.ppage}><strong>Economia</strong>: Uma boa gestão reduz custos com compras desnecessárias e evita a obsolescência de equipamentos.</li>
          <li className={styles.ppage}><strong>Eficiência Operacional</strong>: Ao garantir que os técnicos tenham acesso rápido aos itens, os serviços são realizados com mais agilidade.</li>
        </ul>
      </section>

        <h2 className={styles.sectionTitle}>Tecnologias Utilizadas no Almoxarifado</h2>
      <section id="tecnologias" className={styles.section}>
        <p className={styles.ptitle}>Hoje em dia, muitas ferramentas e tecnologias facilitam a gestão do almoxarifado, como:</p>
        <ul>
          <li className={styles.ppage}><strong>Sistemas de ERP</strong>: Integram o controle de estoque com outros processos empresariais.</li>
          <li className={styles.ppage}><strong>Códigos de Barras e RFID</strong>: Permitem o rastreamento preciso de materiais e equipamentos.</li>
          <li className={styles.ppage}><strong>Sistemas de Inventário Automatizados</strong>: Ajudam a monitorar automaticamente o nível de estoque, alertando sobre itens críticos.</li>
        </ul>
      </section>

        <h2 className={styles.sectionTitle}>Desafios e Soluções no Almoxarifado</h2>
      <section id="desafios" className={styles.section}>
        <p className={styles.ptitle}>Alguns dos principais desafios enfrentados no gerenciamento de almoxarifados incluem:</p>
        <ul>
          <li className={styles.ppage}><strong>Falta de Visibilidade</strong>: Dificuldade em localizar rapidamente itens no estoque.</li>
          <li className={styles.ppage}><strong>Controle de Inventário</strong>: Manter o estoque atualizado com a demanda de materiais pode ser complexo.</li>
          <li className={styles.ppage}><strong>Solução:</strong> Implementar sistemas de inventário e auditorias regulares para garantir precisão nos dados.</li>
        </ul>
      </section>

        <h2 className={styles.sectionTitle}>O Futuro do Almoxarifado</h2>
      <section id="futuro" className={styles.section}>
        <p className={styles.ptitle}>Com o avanço da tecnologia, o futuro do almoxarifado nas telecomunicações passa por ainda mais automação e integração de sistemas, com a utilização de inteligência artificial para prever demandas e otimizar o uso de recursos.</p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.ptitle}>&copy; 2024 Gestão de Almoxarifado - Telecomunicações</p>
      </footer>
    </div>
    </div>
  );
}

export default About;
