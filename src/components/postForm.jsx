import React,{useState} from 'react'
import Axios from "axios"

function postForm() {
         const url="http://localhost:3000/posts"
         const [data, setdata] = useState({
                  service:"",
                  date:"",
         })
         function handle(e){
                  const newdata={...data}
                  newdata[e.target.id]=e.target.value
                  setdata(newdata)
                  console.log(newdata)
         }
         function submit(e){
                  e.preventDefault()
                  Axios.post(url,{
                           service: data.service,
                           date: data.date,
                  })
                  .then(res=>{
                           console.log(res.data)
                  })
         }
         return (
                  <div>
                  <form onSubmit={(e)=>submit(e)}>
                          <div className="container mt-5">
                                      <div className="row">
                                              <div className="col-md-6">
                                                      <div className="card">
                                                              <div className="card-header"> REACT FORM </div>
                                                              <div className="card-body">
                                                               {/* <div className="form-group"><input type="text" placeholder="enter your name"/></div> 
                                                               <div className="form-group"><input type="email" placeholder="email"/></div>  */}
                                                               <div className="form-group">
                                                                        
                                                                        <select onChange={(e)=>handle(e)} className="form-control" id="service" value={data.service} >
                                                                        <option defaultValue>Select Service</option>
                                                                          <option>FOOD</option>
                                                                          <option>MEDICAL</option>
                                                                          <option>TRANSPORT</option>
                                                                        </select>
                                                                 </div>
                                                                 <div className="form-group">
                                                                 
                                                                 <input onChange={(e)=>handle(e)} id="date" value={data.date} type="date" placeholder="date"/></div> 

                                                               <div className="form-group"><input type="submit" className="btn btn-success"/></div> 
                                                              </div>
                                                      </div>
                                              </div>
                                      </div>
                              </div>  
                              </form>
                        </div>

                )
        }


export default postForm;