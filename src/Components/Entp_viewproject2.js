import React from 'react'
import Nav_entp from './Nav_entp'
import Footer from './Footer';


 function Entp_viewproject2() {
    return (
        <>
            <Nav_entp/>

            <div>
        <div className="jumbotron">
          <h1>LibreHealth
            -Healthcare for Humanity</h1>
          {/* <p></p> */}
          <style dangerouslySetInnerHTML={{__html: "\n            .jumbotron {\n                background-size: cover;\n                padding-top: 6%;\n                padding-bottom: 4%;\n                text-align: center;\n                background-color: #689775;\n            }\n        " }} />
        </div>
        <div className="container main">
          <h1 className="h1" />
          <div className="container">
            <h4> Contributer : </h4>
            <p className="data"> Elon Musk</p>
            <h4>Domain: </h4>
            <p className="data">Artifical Intelligence and Machine Learning</p>
            <h4>Technologies required:</h4>
            <p className="data">python, javascript, android, java, dart/flutter
              ,web, deep learning, hfoss, radiology, mobile apps</p>
            <h4>Description:</h4>
            <p className="data">LibreHealth is the foundation of a worldwide ecosystem of open source Health IT innovation
              and is a place where people can come together to build tools that enhance the quality of healthcare
              around the world. We currently have under our umbrella the following projects: - LibreHealth Toolkit a foundational base for - building Health IT tools -
              LibreHealth EHR  an electronic health record derived from best
              practices and technology from leading open source systems. - LibreHealth Radiology
              (https://librehealth.io/projects/lh-radiology), a specialized distribution of LibreHealth Toolkit
              customized for radiology healthcare professionals Our GSoC student projects will address the real-life
              needs of our projects to help improve the delivery of health care around the world. We have a team of
              expert mentors with decades of experience to help you in your work. They will be continually adding
              project ideas to our forum , and we encourage you to suggest ideas too as
              you learn more about our projects. Check out project ideas (this will change from year to year):
              https://forums.librehealth.io/ideas</p>
            <h4>Link:</h4>
            <a href="https://forums.librehealth.io/t/readme-making-a-successful-gsoc-proposal/4359">liberalhealth.io/t/readme</a>
            
          </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default Entp_viewproject2;

