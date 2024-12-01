import React from "react"
import './Componentes/index.css'

import { CardLateral } from "./Componentes/card-lateral/Card-lateral";
import { MiddleContent } from "./Componentes/middle/MiddleContent";

function App() {

  return (
    <>
      <section className="container-content">
        <CardLateral />
        <MiddleContent />
        <CardLateral />
      </section>

    </>
  )
}

export default App
