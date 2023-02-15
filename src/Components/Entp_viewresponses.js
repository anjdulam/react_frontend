import React from 'react'
import Nav_entp from './Nav_entp'

export function Entp_viewresponses() {
  return (
    <>
      <Nav_entp />

      <div className="j2">
        <div className="jumbotron">
          <h1>Responses</h1>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n        .jumbotron {\n            background-size: cover;\n            padding-top: 6%;\n            padding-bottom: 4%;\n            text-align: center;\n            background-color: #B0CDD2;\n        }\n    " }} />



      <div className="container main">
        <h1 className="h1 text-center mb-4" />
        <h2 className="mt-5 text-secondary mb-5"></h2>
        <div className="d-flex flex-column">
          <div className="res-tab p-3 mb-5 shadow">
            <h3 className="text-center">Response 1</h3>
            <p className="sol" style={{ marginBottom: 0 }}>Solution Overview</p>
            <p style={{ fontSize: '22px', marginTop: 0 }}>
              Free and open wireless networks
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Description</p>
            <p style={{ fontSize: '18px', marginTop: 0 }}>
              Freifunk unites wireless communities like Ninux, qaul.net, Guifi.net, and Evernet e.G. Our communities extensively rely on OpenWRT Linux, OLSR, BATMAN, libremesh, or retroshare.
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Attachments</p>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#">Attached File</a></li>
              <li><a href="#">Github Repositary</a></li>
            </ul>
            <p className="sol" style={{ marginBottom: 0 }}>Posted by</p>
            <blockquote><strong>Abc</strong></blockquote>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-success">Approve</button>
              </div>
              <div>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
          <div className="res-tab p-3 mb-5 mt-5 shadow">
            <h3 className="text-center">Response 2</h3>
            <p className="sol" style={{ marginBottom: 0 }}>Solution Overview</p>
            <p style={{ fontSize: '22px', marginTop: 0 }}>
              Using Scalar Vector Machine Instead of Logistic Regression
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Description</p>
            <p style={{ fontSize: '18px', marginTop: 0 }}>
              Using SVM makes the model more efficient and accurate.So due to the
              improvement in the efficiency the model will also perform well above
              the treshold limit.And efficient data cleaning will also increases
              the performance of the model.
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Attachments</p>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#">Attached File</a></li>
              <li><a href="#">Github Repositary</a></li>
            </ul>
            <p className="sol" style={{ marginBottom: 0 }}>Posted by</p>
            <blockquote><strong>Abc</strong></blockquote>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-success">Approve</button>
              </div>
              <div>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
          <div className="res-tab p-3 mb-5 mt-5 shadow">
            <h3 className="text-center">Response 3</h3>
            <p className="sol" style={{ marginBottom: 0 }}>Solution Overview</p>
            <p style={{ fontSize: '22px', marginTop: 0 }}>
              Using Scalar Vector Machine Instead of Logistic Regression
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Description</p>
            <p style={{ fontSize: '18px', marginTop: 0 }}>
              Using SVM makes the model more efficient and accurate.So due to the
              improvement in the efficiency the model will also perform well above
              the treshold limit.And efficient data cleaning will also increases
              the performance of the model.
            </p>
            <p className="sol" style={{ marginBottom: 0 }}>Attachments</p>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#">Attached File</a></li>
              <li><a href="#">Github Repositary</a></li>
            </ul>
            <p className="sol" style={{ marginBottom: 0 }}>Posted by</p>
            <blockquote><strong>Abc</strong></blockquote>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-success">Approve</button>
              </div>
              <div>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default Entp_viewresponses;
