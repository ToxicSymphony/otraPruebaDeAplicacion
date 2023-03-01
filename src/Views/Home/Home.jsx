import React from "react";
import Carrusel from "../../Components/Carrusel/Carrusel.jsx"
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="container  ">
        <div className="row d-flex justify-content-center my-4 ">
          <div className="col-12 text-center">
            <h1>Bienvenido a Application</h1>
          </div>
        </div>
        <Carrusel/>
        <div className="row border border-danger d-flex justify-content-center my-2">
          <div className="col-12 text-center">
            <h1>Avisos parroquiales</h1>
          </div>
        </div>
        <div className="container-fluid border border-danger my-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-3 text-center">
              <Link>Aviso 1</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Aviso 2</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Aviso 3</Link>
            </div>
          </div>
        </div>
        <div className="row border border-danger d-flex justify-content-center my-2">
          <div className="col-12 text-center">
            <h1>Celulas</h1>
          </div>
        </div>
        <div className="container-fluid border border-danger my-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-3 text-center">
              <Link>Celula 1</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Celula 2</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Celula 3</Link>
            </div>
          </div>
        </div>
        <div className="row border border-danger d-flex justify-content-center my-2">
          <div className="col-12 text-center">
            <h1>Noticias sobre la herramienta</h1>
          </div>
        </div>
        <div className="container-fluid border border-danger my-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-3 text-center">
              <Link>Celula 1</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Celula 2</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Celula 3</Link>
            </div>
          </div>
        </div>
        <div className="row border border-danger d-flex justify-content-center my-2">
          <div className="col-12 text-center">
            <h1>Informacion general Talento Humano</h1>
          </div>
        </div>
        <div className="container-fluid border border-danger my-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-3 text-center">
              <Link>Informacion 1</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Informacion 2</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Informacion 3</Link>
            </div>
          </div>
        </div>
        <div className="row border border-danger d-flex justify-content-center my-2">
          <div className="col-12 text-center">
            <h1>Eventos Direccion Seleccion y Contratacion</h1>
          </div>
        </div>
        <div className="container-fluid border border-danger my-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-3 text-center">
              <Link>Evento 1</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Evento 2</Link>
            </div>
            <div className="col-3 text-center">
              <Link>Evento 3</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
