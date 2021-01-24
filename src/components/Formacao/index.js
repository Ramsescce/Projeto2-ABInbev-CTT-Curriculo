import React from 'react'

function Formacao(props) {
    const { educacao } = props.resposta

    return (
        <>
            <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">

                    {

                        educacao.map(n =>
                        (<li key={n.id}>
                            <h4>{n.instituicao}</h4>
                            <p>{n.curso}</p>
                        </li>

                        ))}

                </div>
            </div>
        </>
    )
}
export default Formacao