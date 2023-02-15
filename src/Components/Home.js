import React from 'react';

import Header from './Header';
import Footer from './Footer';


function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="intro container-fluid">
          <h1>Akova</h1>
          <p>Where talent meets opportunity</p>
        </div>
        <div className="achievements container-fluid">
          <div className="work">
            {/* <i class="fas fa-atom"></i> */}
            <h1><a href="student_pickproject.html">STUDENT</a></h1>
            {/* <p class="work-heading">student</p> */}
            <p className="work-text">I have worked on many projects and I am very proud of them. I am a very good developer
              and
              I am always looking for new projects.</p>
          </div>
          <div className="work">
            {/* <i class="fas fa-skiing"></i> */}
            <h1><a href="entp_dashboard.html">ENTREPRENEURS</a></h1>
            {/* <p class="work-heading">Entrepreneur</p> */}
            <p className="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am
              always looking for new skills.</p>
          </div>
        </div>
        {/* <div className="about-me" id="a">
          <div className="about-me-text">
            <h2>About Us</h2>
            <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for
              new projects. I am a very good developer and I am always looking for new projects.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me" />
        </div> */}
      </main>

      <Footer />

    </>







  );

}

export default Home;

