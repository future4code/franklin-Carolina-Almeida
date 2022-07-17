import React, {useState} from "react";

export function WhatsLab() {
 const [contato, setContato] = useState([
    {
        nome: "Carol",
        mensagem: "ola!"
    },
    {
        nome: "Malu",
        mensagem: "tudo bem?"
    }
   ]);

  const [valorInputRemetente, setvalorInputRemetente] = useState("");
  const [valorInputMensagem, setvalorInputMensagem] = useState("");

  const adicionaRemetente = () => {
    const novoRemetente = {
      nome: valorInputRemetente,
      mensagem: valorInputMensagem
    };

    const novoContato = [...contato, novoRemetente];

    setContato(novoContato);
  };

  const onChangeInputContato = (event) => {
    setvalorInputRemetente(event.target.value);
  };

  const onChangeInputMensagem = (event) => {
    setvalorInputMensagem(event.target.value);
  };

  const listaDeComponentes = contato.map((remetente) => {
    return (
      <p>
        {remetente.nome} - {remetente.mensagem}
      </p>
    );
  });

  return (
    <div>
      <h1>WhatsLab</h1>
      <div>
        <input
          value={valorInputRemetente}
          onChange={onChangeInputContato}
          placeholder={"Nome"}
        />
        <input
          value={valorInputMensagem}
          onChange={onChangeInputMensagem}
          placeholder={"Mensagem"}
        />
        <button onClick={adicionaRemetente}>Enviar</button>
      </div>
      <div>{listaDeComponentes}</div>
    </div>
  );
};
