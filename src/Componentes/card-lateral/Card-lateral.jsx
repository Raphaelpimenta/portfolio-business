import React from "react";
import './card-lateral.css'

// export function Teste() {
export function CardLateral() {

    return (
        <>
            <section className="card-lateral">
                <div className="titulo-card">
                    <h1>Rapha ®</h1>
                    <p>Desenvolvedor <br />Web</p>
                </div>

                <img src="public/img/raphael.jpg" alt="Foto do Raphael" />

                {/* <h3>raphael.pimentagomes@hotmail.com</h3> */}
                <p className="card-infos">📧 raphael.pimentagomes@hotmail.com</p>
                <p className="card-infos">📍 São Paulo, SP</p>

                <div className="icones-card">
                    <img src="/public/img/whatsapp.png" alt="" />
                    <img src="/public/img/linkedin.png" alt="" />
                    <img src="/public/img/github.png" alt="" />
                </div>

                <button className="card-btn">Entre em contato</button>

            </section>
        </>
    )

}

