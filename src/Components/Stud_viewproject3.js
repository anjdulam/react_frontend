import React from 'react'
import Nav_stud from "./Nav_stud";
import Footer from './Footer';



function Stud_viewproject3() {
    return (
        <>
            <Nav_stud />

            <div>
                <div className="jumbotron">
                    <h1>Free and open wireless networks</h1>
                    <style dangerouslySetInnerHTML={{ __html: "\n                .jumbotron {\n                    background-size: cover;\n                    padding-top: 6%;\n                    padding-bottom: 4%;\n                    text-align: center;\n                    background-color: #D7A8C7;\n                }\n            " }} />
                    {/* <p></p> */}
                </div>
                <div className="container main">
                    <h1 className="h1" />
                    <div className="container">
                        <h4> Contributer : </h4>
                        <p className="data">Iman  </p>
                        <h4>Domain: </h4>
                        <p className="data">Infrastructure and cloud</p>
                        <h4>Technologies required:</h4>
                        <p className="data">c, python, javascript, openwrt, gnu/linux</p>
                        <h4>Description:</h4>
                        <p className="data">Freifunk unites wireless communities like Ninux, qaul.net, Guifi.net, and Evernet e.G. Our communities extensively rely on OpenWRT Linux, OLSR, BATMAN, libremesh, or retroshare. Our communities build decentralized wireless network architectures based on embedded networking hardware such as WiFi routers. The contributions are made by individuals and local groups which are highly motivated to build open and free wireless networks providing Internet access to everybody. Moreover, we also create solutions that allow anonymous and secure communication. Most wireless routers in our networks are based on affordable, off-the-shelf devices such as WiFi routers. The Freifunk operating system extends the OpenWrt Linux OS by additional software packages that enable multi-hop wireless mesh networking and new P2P communication features.
                        </p>
                        <h4>Link:</h4>
                        <a href="https://freifunk.net/en">liberalhealth.io/t/readme</a>

                        <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
                            <a href="student_uploadcode.html" className="btn btn-primary" role="button">Upload code</a>
                            <style dangerouslySetInnerHTML={{ __html: "\n                    .btn {\n                        background-color: #917164;\n                        text-decoration: none;\n                        color: white;\n                        padding: 1% 2%;\n                        border: 1px solid #fff;\n                        transition: 0.3s ease;\n\n                    }\n\n                    .btn:hover {\n                        background-color: #fff;\n                        color: black;\n                    }\n                " }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Stud_viewproject3;
