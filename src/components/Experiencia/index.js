import React from 'react'

function Experiencia(props) {
  const { experiencia } = props.resposta


  return (
    <>
      <div className="experience">
        <h2>Cursos e Certificados</h2>

        <div className="experience-item">
          <div>
            {

              experiencia.map(n =>
              (<li key={n.id}>
                <strong>{n.cargo}</strong>
                <span>{n.periodo}</span>
                <strong>{n.empresa}</strong>
                <span>{n.local}</span>
                <p>{n.conteudo}</p>
              </li>

              ))}

          </div>
          <p>

            *Ser um parceiro de pensamento contínuo  em iniciativas estratégicas de planejamento e desenvolvimento.
            

        </p>
        </div>
        <div className="experience-item">



        </div>
      </div>
    </>
  )
}
export default Experiencia