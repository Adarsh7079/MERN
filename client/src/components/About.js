import React from 'react'
import adarsh from "../image/adarsh.jpg";

const About=()=> {
  return (
    <div>
       <div>
          <form method=""> 
            <div className="row">
              <div className="col-md-4">
                <img src={adarsh} alt="adarsh " sercset="" width={400}/>
              </div>
              <div className="col-md-4">
                <div>
                  <h5>Adarsh Paritosh </h5>
                  <h6>Software Developer</h6>
                  <p className="profile-rating mt-3 mb-5">Ranking :<span>1/10</span></p>
                  <ul class="nav" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                      </li>
                      <li class="nav-item">
                        <a  class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
              </div>
            </div>
            <div className="row">
              {/* left side url */}
              <div className="col-md-4">
                <div className="profile">
                  <p>Work Link</p>
                  <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">Youtube</a>  <br/>
                  <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">Youtube</a>  <br/>
                  <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">Youtube</a>  <br/>
                  <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">Youtube</a>  <br/>
                  <a href="https://getbootstrap.com/docs/5.2/components/navs-tabs/" target="_blank">Youtube</a>  <br/>
                </div>
              </div>
              {/* right side url */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tag" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home">
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>123123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Adarsh Paritosh</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>a123123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>1312312</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile">
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>123123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Adarsh Paritosh</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>a123123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label >UserID</label>
                      </div>
                      <div className="col-md-6">
                        <p>1312312</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
       </div>
    </div>
  )
}

export default About;