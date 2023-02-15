import React from 'react'
import Nav_stud from './Nav_stud';
import Footer from './Footer';

 function Stud_uploadcode() {
    return (
        <>
               <Nav_stud/>
            <div className="container main">
                <h1 className="mb-5">Cancer Detection using Machine Learning</h1>
                <h5 className="h3">Solution Overview</h5>
                <input className="form-control form-control-lg" type="text" placeholder="Type something.." />
                <h3 className="mb-4 mt-5">Upload your idea</h3>
                <form>
                    <div className="form-group">
                        {/* <label for="exampleFormControlTextarea1">Enter your idea</label> */}
                        <div className="text-right">
                            {/* <button type="button" class="btn btn-success">
                <i class="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
              </button> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={10} defaultValue={""} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="mt-4">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Upload a file</label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </form>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-success">Submit Idea</button>
                            </div>
                        </div>
                    </div></form>
                <h5 className="mb-4 mt-5">Comment</h5>
                <form>
                    <div className="form-group">
                        {/* <label for="exampleFormControlTextarea1">Enter your idea</label> */}
                        <div className="text-right">
                            {/* <button type="button" class="btn btn-success">
              <i class="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
            </button> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={6} defaultValue={""} />
                        </div>
                        <div className="d-flex mt-3 justify-content-end">
                            <button className="btn btn-primary">Post</button>
                        </div>
                    </div></form></div>
                    <Footer/>
        </>
    );
}

export default Stud_uploadcode;
