import './NomeLoja.css';
const NomeLoja = ({ children }) => {
    return (
        <div className="container-nome-loja">
            <h2>Nome da loja</h2>
            <h3>{children}</h3>
        </div>
    );
};

export default NomeLoja;
