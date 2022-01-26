import React from 'react';
import {Link} from 'react-router-dom'

const Common = (props) => {
  return (
      <>
        <section id='main' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>{props.header} <strong className='brand_name'>ShakilAlam</strong> </h1>
                  <h2 className="my-3">
                    We are Best Developer Team
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className='btn btn-outline-primary'>{props.button}</Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className='img-fluid animated' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Common;
