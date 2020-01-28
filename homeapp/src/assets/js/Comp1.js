import React from "react";
import doc from "../images/exp_panel1.jpg";
import "../css/comp1.css";
function Comp1() {
  return (
    <div className="portion4">
                    <div class="row">
                        <div class="col-md-2 col-sm-12 col1">
                            <p class="para1">
                                <h2 style={{ fontSize: "3rem" }} class="expert">
                                <span class="blue1">+</span>
                                <br></br>
                                Our Panel Of Experts
                                </h2>
                                <button type="button" class="btn b1">
                                <h3 class="btn-txt">
                                    View all <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </h3>
                                </button>
                            </p>
                        </div>
                        <div class="col-md-10 col-sm-12 col2">
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                <button type="button" class="btn b2">
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                </button>
                                <button type="button" class="btn b2">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                <p style={{ textAlign: "center" }}>
                                    <button type="button" class="btn b3">
                                    1
                                    </button>
                                    <button type="button" class="btn b3">
                                    2
                                    </button>
                                    <button type="button" class="btn b3">
                                    3
                                    </button>
                                    <button type="button" class="btn b3">
                                    4
                                    </button>
                                    <button type="button" class="btn b3 shadow1">
                                    ...
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col2">
                                <div class="doc-img">
                                    <img src={doc} alt="doc1" class="doc-img1"></img>
                                    <button type="button" class="btn b4">
                                    Book an Appointment
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                    <div class="card card1">
                                    <div class="card-in">
                                        <h3>Dr. Joshua Roy</h3>
                                        <h4>Neurosurgeon</h4>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col2">
                                <div class="doc-img">
                                    <img src={doc} alt="doc1" className="doc-img1"></img>
                                    <button type="button" class="btn b4">
                                    Book an Appointment
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                    <div class="card card1">
                                    <div class="card-in">
                                        <h3>Dr. Joshua Roy</h3>
                                        <h4>Neurosurgeon</h4>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
  );
}

export default Comp1;
