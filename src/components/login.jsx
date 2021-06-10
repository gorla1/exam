import React, { Component } from 'react'

class login extends Component {

        render() {
                return (
                        <div>
                              <div className="container mt-5">
                                      <div className="row">
                                              <div className="col-md-6">
                                                      <div className="card">
                                                              <div className="card-header"> REACT FORM </div>
                                                              <div className="card-body">
                                                               {/* <div className="form-group"><input type="text" placeholder="enter your name"/></div> 
                                                               <div className="form-group"><input type="email" placeholder="email"/></div>  */}
                                                               <div class="form-group">
                                                                        <label for="exampleFormControlSelect1">Select Service</label>
                                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                                          <option>FOOD</option>
                                                                          <option>MEDICAL</option>
                                                                          <option>TRANSPORT</option>
                                                                        </select>
                                                                 </div>
                                                                 <div className="form-group">
                                                                 
                                                                 <input type="date" placeholder="date"/></div> 

                                                               <div className="form-group"><input type="submit" className="btn btn-success"/></div> 
                                                              </div>
                                                      </div>
                                              </div>
                                      </div>
                              </div>  
                        </div>
                )
        }
}

export default login;
