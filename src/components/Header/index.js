import React from 'react'

function Header(props) {
    const { nome, ocupacao, resumo } = props.resposta
    return (
        <>
            <div className="perfil">
                <img src="https://i.pravatar.cc/400" alt="Perfil" />
            </div>

            <div className="biografia">

                <h1>{nome}</h1>

                <div className="ocupacao">{ocupacao}</div>
                <p>Iniciando minha trajetória no desenvolvimento de projetos React</p>
            </div>

            <div className="titulo">
                Perfil<br /> Profissional
            </div>

            <div className="perfil-profissional">

                <p>{resumo}</p>

            </div>
        </>)

}
export default Header