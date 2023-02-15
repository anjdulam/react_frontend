import React from 'react'
import Nav_entp from './Nav_entp'
import Footer from './Footer';

function Entp_uploadproject() {
  return (
    <>
      <Nav_entp />

      <div className="container contact-form">
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form method="post">
          <h3>UPLOAD A PROJECT/ PROBLEM STATEMENT</h3>
          <p> <strong>Your details :</strong> </p>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
              </div>
              <div className="form-group">
                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"  />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Company/Organization *"  />
              </div>
              <p> <strong>Your Idea : </strong> </p>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Idea *"  />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Domain *"  />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Technologies required *"  />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Due date *"  />
              </div>
              <textarea name="txtMsg" className="form-control" placeholder="Despcription *" style={{ width: '200%', height: '25%' }}  />
              <div className="form-group">
                <input type="submit" name="btnSubmit" className="btnContact"  />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Entp_uploadproject;
