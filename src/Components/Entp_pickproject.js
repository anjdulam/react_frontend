import React from 'react'
import Footer from './Footer';
import Nav_entp from './Nav_entp';


function Entp_pickproject() {
    return (
        <>
        <Nav_entp/>
        <div>
        <div className="j1">
          <div className="jumbotron">
            <h1>My projects</h1>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n        .jumbotron {\n            background-size: cover;\n            padding-top: 6%;\n            padding-bottom: 4%;\n            text-align: center;\n            background-color: #B0CDD2;\n        }\n    " }} />
        <div className="container">
          <div className="row">
            <div className="chip">
              <div className="chipactive">
                All
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Web development
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Android development
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                UI/UX Designing
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Data Science
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Machine Learning
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Data Mining
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Cloud Computing
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Big Data
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Blockchain
              </div>
            </div>
            <div className="chip">
              <div className="chipinactive">
                Power Electronics
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
        <div className="row ss">
            <div className=" col-md-3 input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0" id="search-addon">
                <button className="btn btn-secondary"><i className="bi bi-search b" /></button>
                
              </span>
            </div>
            <div className="col-md-8" />
            <div className="dropdown col-md-1">
              <button className="btn btn-white toggle" type="button" data-toggle="dropdown">Sort
                <span className="caret" /></button>
              <ul className="dropdown-menu">
                <li><a href="#">Latest</a></li>
                <li><a href="#">Oldest</a></li>
                <li><a href="#">A-Z</a></li>
                <li><a href="#">Z-A</a></li>
              </ul>
            </div>
          </div>

          <div className="row projectcard shadow-lg">
            <div className="col-md-7 text-centre rr">
              <h3 className="card-title">Free and open wireless networks</h3>
              <p><strong>Domain:</strong> Infrastructure and cloud</p>
              <p>Building decentralized wireless network architectures based on embedded networking hardware such as WiFi routers. </p>
              <div className="d-flex justify-content-between ">
                <a href="entp_viewproject3.html" className="btn btn-outline-dark active ">DETAILS</a>
                <a href="entp_viewresponses.html" className="btn btn-outline-dark active">VIEW RESPONSES</a>
              </div>
            </div>
            <div className="col-md-5 imgg d-flex justify-content-end">
              <img src="https://media.istockphoto.com/id/1127997676/photo/social-network-online-sharing-connection-concept.jpg?s=612x612&w=0&k=20&c=NdiR8cXiM5LHQk3Xwl_m20_pdIrLtzmuKkXKDz03a2o=" alt="nothing" text-align="right" />
            </div>
          </div>

          <div className="row projectcard shadow-lg">
            <div className="col-md-7 text-centre rr">
              <h3 className="card-title">Cancer Detection using Machine Learning Algorithms</h3>
              <p><strong>Domain:</strong> Artificial Intelligence and Machine learning</p>
              <p>Finding cancer cells using Machine Learning Algorithms and effectively treating the cancer </p>
              <div className="d-flex justify-content-between ">
                <a href="entp_viewproject.html" className="btn btn-outline-dark active ">DETAILS</a>
                <a href="entp_viewresponses.html" className="btn btn-outline-dark active">VIEW RESPONSES</a>
              </div>
            </div>
            <div className="col-md-5 imgg d-flex justify-content-end">
              <img src="https://media.istockphoto.com/id/1074166486/photo/in-control-room-doctor-and-radiologist-discuss-diagnosis-while-watching-procedure-and.jpg?s=612x612&w=0&k=20&c=tOHpWl88p69oPKPsJMAHMwW7im6yzF3lfZT8wSJj7t8=" alt="nothing" text-align="right" />
            </div>
          </div>

          
          
          <div className="row projectcard shadow-lg">
            <div className="col-md-7 text-centre rr">
              <h3 className="card-title">LibreHealth-Healthcare for Humanity</h3>
              <p><strong>Domain:</strong> Deep learning and Radiology</p>
              <p>LibreHealth is the foundation of a worldwide ecosystem of open source Health IT innovation and is a
                place where people can come together to build tools that enhance the quality of healthcare around
                the world. </p>
              <div className="d-flex justify-content-between ">
                <a href="entp_viewproject2.html" className="btn btn-outline-dark active ">DETAILS</a>
                <a href="entp_viewresponses.html" className="btn btn-outline-dark active">VIEW RESPONSES</a>
              </div>
            </div>
            <div className="col-md-5 imgg d-flex justify-content-end">
              <img src="https://media.istockphoto.com/id/1074166486/photo/in-control-room-doctor-and-radiologist-discuss-diagnosis-while-watching-procedure-and.jpg?s=612x612&w=0&k=20&c=tOHpWl88p69oPKPsJMAHMwW7im6yzF3lfZT8wSJj7t8=" alt="nothing" text-align="right" />
            </div>
          </div>
        </div>
      </div>

        

        <Footer/>

        </>
    );
}

export default Entp_pickproject;
