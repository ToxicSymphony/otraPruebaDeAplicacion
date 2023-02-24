import React from 'react'


export const Floatbutton = () => {
  return (
    <>
    <div className='col-sm-12 d-flex justify-content-end sticky-bottom end-0 '>
        <p className="bg-blue btn btn-primary text-white m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-plus-lg "></i>
        </p>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content ">
        <div class="modal-header bg-blue">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer bg-blue">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
