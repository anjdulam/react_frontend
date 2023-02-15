import React from "react";
import Nav_stud from "./Nav_stud";
import Footer from './Footer';


function Stud_viewproject() {
  return (
    <>
      <Nav_stud />

      <div>
        <div className="jumbotron">
          <h1>Cancer Detection using Machine Learning Algorithms</h1>
          {/* <p></p> */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n            .jumbotron {\n                background-size: cover;\n                padding-top: 6%;\n                padding-bottom: 4%;\n                text-align: center;\n                background-color: #E8C38C;\n            }\n        ",
            }}
          />
        </div>
        <div className="container main">
          <h1 className="h1" />
          <div className="container">
            <h4> Contributer : </h4>
            <p className="data"> Elon Musk</p>
            <h4>Domain: </h4>
            <p className="data">Artifical Intelligence and Machine Learning</p>
            <h4>Technologies required:</h4>
            <p className="data">Tensor Flow,Logistic Regression</p>
            <h4>Description:</h4>
            <p className="data">
              This project is about finding cancer cells using Machine Learning
              Algorithms and effectively treating the cancer.In this we feed the
              machine with the training data and test data.In the training data
              we provide the infromation about the previously detected cancer
              cells.With this we train the machine efficiently.Thus once after
              training the machine with the test data whose outputs are already
              known.Thus the algorithm is now ready to detect the cancer cells
              in the human body.And can be used effectivily in the treatment of
              cancer.
            </p>
            <h4>Going to be revolutionary in:</h4>
            <ol className="data">
              <li>Reducing human strain on detection of cancer cells.</li>
              <li>
                Saving lives of patients who are not getting cancer detection in
                enough time.
              </li>
              <li>Reducing the cost of cancer cell detection.</li>
            </ol>
            <h4>Expected Output:</h4>
            <img
              src="https://news.developer.nvidia.com/wp-content/uploads/2016/06/DL-Breast-Cancer-Detection-Image.png"
              alt="drone-img"
              className="img-fluid"
              width="800px"
              height="auto"
            />
            {/* <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;">Problem Statement</p> */}
            {/* <h4>Working of the above algorithm is efficient upto a specific level.But after that threshold limit
            is is getting failed.</h4> */}
            {/* <h6 class="h5">Any one who can solve this will get awarded</h6> */}
            <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
              <a
                href="student_uploadcode.html"
                className="btn btn-primary"
                role="button"
              >
                Upload code
              </a>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                    .btn {\n                        background-color: #917164;\n                        text-decoration: none;\n                        color: white;\n                        padding: 1% 2%;\n                        border: 1px solid #fff;\n                        transition: 0.3s ease;\n\n                    }\n\n                    .btn:hover {\n                        background-color: #fff;\n                        color: black;\n                    }\n                ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Stud_viewproject;
