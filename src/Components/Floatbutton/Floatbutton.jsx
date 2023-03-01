import React from "react";

export const Floatbutton = () => {
  return (
    <>
      <div className="col-sm-12 d-flex justify-content-end sticky-bottom  ">
        <p
          className="bg-blue btn btn-primary text-white m-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus-lg "></i>
        </p>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header bg-blue " data-bs-theme="dark">
              <h5 className="modal-title text-white" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-blue">
              <div className="col-8 mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-white"
                >
                  Nombre del indicador
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-10 mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label text-white"
                >
                  Descripcion general
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ej 'determina los ingresos semanales'"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label text-white">
                  Descripcion especifica
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="ej 'Este indicador se usa para conocer cuantos ingresos hubieron la ultima semana e indica las areas en las que hubieron mayor y menor numero de contrtaciones'"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer bg-blue">
              <button type="button" className="btn btn-primary bg-blue mx-auto border border-white">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
