import React from 'react'
import Footer from './Footer';
import Nav_entp from './Nav_entp'

function Entp_viewproject3() {
    return (
        <>
            <Nav_entp />

            <div className="mb-5">
                <div className="jumbotron">
                    <h1>Free and open wireless networks</h1>
                    {/* <p></p> */}
                    <style dangerouslySetInnerHTML={{ __html: "\n            .jumbotron {\n                background-size: cover;\n                padding-top: 6%;\n                padding-bottom: 4%;\n                text-align: center;\n                background-color: #D7A8C7;\n            }\n        " }} />
                </div>
                <div className="container main mb-3">
                    <h1 className="h1 mb-4" />
                    <div className="container">
                        <h4> Contributer : </h4>
                        <p className="data"> Elon Musk</p>
                        <h4>Domain: </h4>
                        <p className="data">Infrastructure and cloud</p>
                        <h4>Technologies required:</h4>
                        <p className="data">c, python, javascript, openwrt, gnu/linux</p>
                        <h4>Description:</h4>
                        <p className="data">Freifunk unites wireless communities like Ninux, qaul.net, Guifi.net, and Evernet e.G. Our communities extensively rely on OpenWRT Linux, OLSR, BATMAN, libremesh, or retroshare. Our communities build decentralized wireless network architectures based on embedded networking hardware such as WiFi routers. The contributions are made by individuals and local groups which are highly motivated to build open and free wireless networks providing Internet access to everybody. Moreover, we also create solutions that allow anonymous and secure communication. Most wireless routers in our networks are based on affordable, off-the-shelf devices such as WiFi routers. The Freifunk operating system extends the OpenWrt Linux OS by additional software packages that enable multi-hop wireless mesh networking and new P2P communication features.</p>
                        <h4 className='mb-4'>Link:</h4>
                        <a href="https://freifunk.net/en">liberalhealth.io/t/readme</a>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Entp_viewproject3;

