import './App.css';
import Profile from './assets/profile.jpeg';

function App() {
    return (
        <div className="container">
            <header>
                <h2>LogoApp</h2>
                <ul className="menu">
                    <li>Projetos</li>
                    <li>Artigos</li>
                    <li>Contato</li>
                </ul>
            </header>
            <section>
                <div className="left">
                    <img src={Profile} alt="Profile" />
                    <strong>Rafaela Wessling Oening</strong>
                    <span>
                        <br />
                        Eu sou Rafaela, estudante do curso de Desenvolvimento de Software Fullstack na Cubos Academy.
                        Tenho conhecimento nas seguintes tecnologias: JavaScript, HTML, CSS, React, Python, MongoDB e
                        FastAPI.
                    </span>
                </div>
                <section className="right">
                    <div className="post">
                        <strong>1 de julho de 2023</strong>
                        <h2>Introducão ao React</h2>
                        <span>
                            Nesse post nós iremos falar sobre como o React é importante para o desenvolvedor frontend
                            moderno.
                        </span>
                        <a href="#">Ler mais</a>
                    </div>

                    <div className="post">
                        <strong>20 de junho de 2023</strong>
                        <h2>Introducão ao HTML e CSS</h2>
                        <span>Nesse post nós iremos falar sobre o uso de tags HTML e estilizacões com o CSS.</span>
                        <a href="#">Ler mais</a>
                    </div>

                    <div className="post">
                        <strong>10 de junho de 2023</strong>
                        <h2>Lógica de Programacão</h2>
                        <span>
                            Nesse post nós iremos falar sobre o uso do JavaScript para resolver problemas de lógica e
                            sua importância para o ambiente da programacão.
                        </span>
                        <a href="#">Ler mais</a>
                    </div>
                </section>
            </section>
            <footer>
                <ul className="menu">
                    <li>Projetos</li>
                    <li>Artigos</li>
                    <li>Contato</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
