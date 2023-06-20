import React from 'react'

const SpecificCourseAccordian = () => {
  return (
    <>
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-10'>
            <h5 className='mt-2 widclass1 fs-2'>FAQS</h5>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Can I just enroll in a single course? I'm not interested in the entire Specialization?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className='userUrl1'>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id
       elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What is the refund policy?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className='userUrl1'>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id
       elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What background knowledge is necessary?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className='userUrl1'>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id
       elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
          </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Do i need to take the courses in a specific order?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p className='userUrl1'>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id
       elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
        </div>
    </div>
  </div>
</div>




            </div>
        </div>
       </div>
    </>
  )
}

export default SpecificCourseAccordian