import './Articles.css'
import { Link } from 'react-router-dom'

function Articles() {
    return (
        <div className="articles-container">
            <h1>Rendimiento Cognitivo</h1>
            <p>¿Buscas llevar tus habilidades mentales al siguiente nivel?
                ¿Quieres conocer más sobre cómo los nootrópicos pueden potenciar 
                tu memoria, enfoque y creatividad? ¡Has llegado al lugar correcto! <br /><br />

                En Beam of Light, no sólo nos comprometemos a 
                ofrecerte las bebidas nootrópicas de la más alta calidad, sino 
                que también creemos firmemente en el poder de la educación y la información. <br /><br />
                
                Comprender los matices del rendimiento cognitivo puede ser un viaje 
                fascinante, y queremos ser tu guía en esta exploración.</p>
            <div className='articles-list'>
                <h2>Artículos</h2>
                <ul>
                    <li>
                        <Link exact to='/beam-frontend/articles/article' className='link' >¿Qué son los nootrópicos?</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Articles
