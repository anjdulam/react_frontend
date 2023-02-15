import React from 'react';
import Nav_stud from './Nav_stud';
import Footer from './Footer';


function Stud_dashboard() {
  return (
    <>
      <div>
        <Nav_stud />
        <div className="jumbotron">
          <h1 className="sub">Projects submitted </h1>
          <style dangerouslySetInnerHTML={{__html: "\n      .sub {\n        text-align: center;\n      }\n    " }} />
          
          
          
          <style dangerouslySetInnerHTML={{ __html: "\n      .jumbotron {\n\n        background-size: cover;\n        padding-top: 6%;\n        padding-bottom: 4%;\n        text-align: left;\n        background-color: #B0CDD2;\n      }\n    " }} />
        </div>
        <div className="container mb-5 main">
          <div className="row mt-5 ">

            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-success">Approved</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab  px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-warning">In progress</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-info">Submitted</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

          </div>


          <div className="row mt-5">
            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-danger">Rejected</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab  px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-secondary">Draft</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 shadow-lg">
              <div className="idea-tab  px-3 py-2">
                <h3 className="text-center">Project Name</h3>
                <blockquote>Contributer:Elon Musk</blockquote>
                <p><strong>Idea</strong>:You should change the code regarding... </p>
                <p>Status:<span className="badge bg-secondary">Draft</span></p>
                <div className="d-flex justify-content-center mb-3">
                  <button className="btn btn-primary"> View Idea</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Stud_dashboard;
