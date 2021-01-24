import React, { useState } from 'react';
import "./App.css"
import Header from "./components/Header";
import Button from "./components/Button";
import Formacao from "./components/Formacao";
import Experiencia from "./components/Experiencia";


function App() {

  const fakeAPI =
  {
    nome: 'Ramses Godoy',
    ocupacao: 'Front-end React Developer',
    resumo: 'Coragem é a minha palavra de ordem, que tem um enorme poder sobre mim. Por meio dela, vivo, trabalho, busco autoconhecimento.',


    contatos: [
      {
        id: 1,
        tipo: 'Celular: ',
        contato: '48 9982-34159'
      },
      {
        id: 2,
        tipo: 'Email: ',
        contato: 'Ramses.godoy@fatec.sp.gov.br'
      }
    ],

    educacao: [
      {
        id: 1,
        instituicao: 'FATEC-Campinas',
        curso: 'Análise e Desenvolvimento de Sistemas'
      },

    ],

    experiencia: [
      {
        id: 1,
        cargo: 'CISCO IT Essentials',
        periodo: 'Concluido-Dezembro 2020',
        empresa: 'UFRO Programador de Sistemas',
        local: 'Concluido-Novembro2020',
        conteudo: 'Inglês Intermediários'
      },

    ]
  }
  const [resposta] = useState(fakeAPI)
  return (
    < main >

      < Header resposta={resposta} />
      
      < aside >
       
      < Button resposta={resposta} />
       
      < Formacao resposta={resposta} />
      
      </ aside >
     
      < Experiencia resposta={resposta} />
    
    </ main >
  );
}

export default App;