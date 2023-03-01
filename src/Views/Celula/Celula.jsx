import React from "react";
import { Link } from "react-router-dom";
import logoSura from "../../assets/logoSura.png";

export const Celula = () => {
  return (
    <div className="container my-5">
      <div className="row my-4 d-flex justify-content-center">
        <div className="col-12 text-center">
          <h1>Nombre de la Celula</h1>
        </div>
        <div className="row my-3">
          <div className="col-12 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, praesentium eveniet commodi repellat et eius laborum
              quis. Libero minima adipisci consequatur asperiores veritatis
              quisquam labore eveniet voluptatem unde! Eligendi, natus.
            </p>
          </div>
        </div>

        <div className="container my-3">
          <div className="row ">
            <div className="col-12 text-center my-4">
              <h2>Indicadores de nuestra Celula</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="row row-cols-2 d-flex justify-content-around">
              <div className="col-3">
                <Link
                  to="/indicadores/indicador:id"
                  className="col-12 col-sm-12 card shadow bg-blue"
                >
                  <div className="col-12 col-sm-12 d-flex justify-content-center">
                    <img
                      src={logoSura}
                      className="img-fluid w-100 p-2 "
                      alt="..."
                    />
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center my-2">
                    <h1 className="text-center text-white fs-4">
                      Indicador tal
                    </h1>
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center p-2">
                    <p className="card-text text-center text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link
                  to="/indicadores/indicador:id"
                  className="col-12 col-sm-12 card shadow bg-blue"
                >
                  <div className="col-12 col-sm-12 d-flex justify-content-center">
                    <img
                      src={logoSura}
                      className="img-fluid w-100 p-2 "
                      alt="..."
                    />
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center my-2">
                    <h1 className="text-center text-white fs-4">
                      Indicador tal
                    </h1>
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center p-2">
                    <p className="card-text text-center text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-3">
                <Link
                  to="/indicadores/indicador:id"
                  className="col-12 col-sm-12 card shadow bg-blue"
                >
                  <div className="col-12 col-sm-12 d-flex justify-content-center">
                    <img
                      src={logoSura}
                      className="img-fluid w-100 p-2 "
                      alt="..."
                    />
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center my-2">
                    <h1 className="text-center text-white fs-4">
                      Indicador tal
                    </h1>
                  </div>

                  <div className="col-12 col-sm-12 d-flex justify-content-center p-2">
                    <p className="card-text text-center text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-12 text-center ">
              <h2>Nuestros Miembros</h2>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-10 d-flex justify-content-around ">
                <div className="col-5">
                  <div className="row card shadow my-4 d-flex justify-content-center text-white bg-blue">
                    <div className="row card-body row-cols-2 d-flex justify-content-around  my-auto mx-auto">
                      <div className="col-4 d-flex justify-content-center">
                        <span>
                          <i className="bi bi-person-bounding-box fs-1"></i>
                        </span>
                      </div>
                      <div className="col-7 text-center fs-6 d-flex align-items-center">
                        <p>Nombre de la persona</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="row card shadow my-4 d-flex justify-content-center text-white bg-blue">
                    <div className="row card-body row-cols-2 d-flex justify-content-around align-items-center mx-auto">
                      <div className="col-4 d-flex justify-content-center">
                        <span>
                          <i className="bi bi-person-bounding-box fs-1"></i>
                        </span>
                      </div>
                      <div className="col-7 text-center fs-6 ">
                        <p className="d-flex aign-items-center">
                          Nombre de la persona
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
