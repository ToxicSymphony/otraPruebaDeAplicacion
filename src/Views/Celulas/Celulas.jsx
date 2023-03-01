import React from 'react'
import { Link } from 'react-router-dom'
import logoSura from "../../assets/logoSura.png"

export const Celulas = () => {
  return (
    <div className='container'>
      <div className="row my-4">
        <div className="col-12 col-sm-12 text-center">
          <h1>Hola te encuentras en la seccion de Celulas</h1>
        </div>
      </div>

      <div className="container">
        <Link to="/celulas/celula:id" className="row card shadow my-4 d-flex justify-content-center text-white bg-blue">
          <div className="row card-body row-cols-2 d-flex justify-content-around my-auto mx-auto">
          <div className="col-4 d-flex justify-content-center">
            <img className='img-fluid w-75' src={logoSura} alt="" />
          </div>
          <div className="col-7 text-center ">
              <h1>Nombre de la Celula</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis iste beatae dolorem possimus in dicta accusantium nobis a corrupti sed sint at labore, tempore ut ex similique pariatur magnam optio.</p>
          </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
