import { useState, useEffect } from "react";

export const ClimaTempo = () => {
  const [nomeDaCidade, setNomeDaCidade] = useState("");
  const [dadosDoClima, setDadosDoClima] = useState("");
  const [erro, setErro] = useState(false);

  const pegarDadosDoClima = async () => {
    try {
      const response = await fetch(
        `https://wttr.in/${nomeDaCidade}?format=%t+%C+%w+%m`
      );
      const data = await response.text();
      setDadosDoClima(data);
      setErro(false);
    } catch (error) {
      setErro(true);
    }
  };

  useEffect(() => {
    if (nomeDaCidade) {
      pegarDadosDoClima();
    }
  }, [nomeDaCidade]);

  return (
    <div>
      <h1>ClimaTempo</h1>

      <input
        type="text"
        placeholder="Digite o nome da sua cidade aqui"
        value={nomeDaCidade}
        onChange={(event) => setNomeDaCidade(event.target.value)}
      />

      {erro && !nomeDaCidade ? <div>Erro</div> : <div>{dadosDoClima}</div>}
    </div>
  );
};
