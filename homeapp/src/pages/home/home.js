import React from "react";
import Comp1 from "../../assets/js/Comp1";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import SearchPage from "../../assets/js/searchbar";

import GPSlogo from "../../assets/images/location_detect_icon.png"

import Pic1C2 from "../../assets/images/w_choose1.png";
import Pic2C2 from "../../assets/images/w_choose2.png";
import Pic3C2 from "../../assets/images/w_choose3.png";
import Pic4C2 from "../../assets/images/w_choose4.png";


import Pic1C3 from "../../assets/images/how_can_help_img.png";
import UseStep1 from "../../assets/images/use_step_img1.png";
import UseStep2 from "../../assets/images/use_step_img2.png";
import UseStep3 from "../../assets/images/use_step_img3.png";
import UseStep4 from "../../assets/images/use_step_img4.png";
import Step1C3 from "../../assets/images/step1.png";
import Step2C3 from "../../assets/images/step2.png";
import Step3C3 from "../../assets/images/step3.png";
import Step4C3 from "../../assets/images/step4.png";

import doc from "../../assets/images/exp_panel1.jpg";

import btnArrowPart5 from "../../assets/images/right_blue_icon.png";

import part5Img1 from "../../assets/images/os_icon1.png";
import part5Img2 from "../../assets/images/os_icon2.png";
import part5Img3 from "../../assets/images/os_icon3.png";


import StoreIcon1 from "../../assets/images/apple_store_icon.png";
import StoreIcon2 from "../../assets/images/playstore_icon.png";


import btnArrowPart8 from "../../assets/images/right_button_arrow.png";

import "./home.css";

import { Button } from 'semantic-ui-react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";

 


class Home extends React.Component{
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
     
    render(){
        return(
            <div className="mainHomeContainer">
                <div className="bannerHome">
                    <div className="bannerContents">
                        <div>Better Doctors,</div>
                        <div><span style={{color: "aqua"}}>Clinics</span>  & <span style={{color: "red"}}>Labs</span> </div>
                        <div>We'll help you find it.</div>
                        <div>
                            <Button className="bannerButton">Make an Appointment</Button>
                        </div>
                        <div style={{     fontSize: "22px"}}>
                            <SearchPage 
                                className="searchBar"
                                holder="Search"
                            />
                        </div>
                    </div>
                </div>
                <div className="portion1">
                    <div className="p11">
                        <div className="p111">
                            Verified<br/>Specialists
                        </div>
                        <div className="p112" >
                            Lorem Ipsum text, this is pure trash. I dont know this.
                        </div>
                        <div className="p113">
                            <button className="pBtn1">
                                Click Here
                                <i class="fas fa-arrow-right" style={{marginLeft: "2%"}}></i>
                            </button>
                        </div>
                    </div>
                    <div className="p12">
                        <div className="p121">
                            Affordable<br/>Consultations    
                        </div>
                        <div className="p122">
                            Lorem Ipsum text, this is pure trash. I dont know this.
                        </div>
                        <div className="p123" style={{color: "white !important"}}>
                            <button className="pBtn2">
                                Click Here
                                <i class="fas fa-arrow-right" style={{marginLeft: "2%"}}></i> 
                            </button>
                        </div>
                    </div>
                    <div className="p13">
                        <div className="p131">
                            Search Doctors
                        </div>
                        <div className="p132">
                            <div>
                                <input placeholder="Location" className="p132Inp"></input>
                                <button className="p132Btn1">
                                    <img src={GPSlogo} alt="gpslogo"></img>
                                    Detect
                                </button>
                            </div>
                            <div>
                                <input placeholder="Specialisation" className="p132Inp"></input>
                            </div>
                            <div className="p1323">
                                <button className="p132Btn2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portion2">
                    <div className="portion21">
                        <div className="portion21Header">
                            <div style={{fontSize: "2rem"}}>Why</div>
                            <div style={{fontSize: "3rem"}}>Choose</div>
                            <div style={{fontSize: "4rem"}}>Us ?</div>
                        </div>
                        <div className="portion21Content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </div>
                    <div className="portion22">
                        <div className="portion221">
                            <div className="customCard">
                                <div className="imgContentCard">
                                    <span><img src={Pic1C2} alt="pic1c2"></img></span>
                                    <span style={{marginTop: "5%"}}>
                                        <div className="a101">Doctor</div>
                                        <div className="a102">Consultation</div>
                                        <div style={{textAlign: "left"}}><Button className="btnPart2">Read More...</Button></div>
                                    </span>
                                </div>
                                <div className="cardDescription">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                                <div className="customCard">
                                    <div className="imgContentCard">
                                        <span><img src={Pic2C2} alt="pic1c2"></img></span>
                                        <span style={{marginTop: "5%"}}>
                                            <div className="a101">Doctor</div>
                                            <div className="a102">Consultation</div>
                                            <div style={{textAlign: "left"}}><Button className="btnPart2">Read More...</Button></div>
                                        </span>
                                    </div>
                                    <div className="cardDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                        </div>
                        <div className="portion222">
                            
                                <div className="customCard">
                                    <div className="imgContentCard">
                                        <span><img src={Pic3C2} alt="pic1c2"></img></span>
                                        <span style={{marginTop: "5%"}}>
                                            <div className="a101">Doctor</div>
                                            <div className="a102">Consultation</div>
                                            <div style={{textAlign: "left"}}><Button className="btnPart2">Read More...</Button></div>
                                        </span>
                                    </div>
                                    <div className="cardDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            

                                <div className="customCard">
                                    <div className="imgContentCard">
                                        <span><img src={Pic4C2} alt="pic1c2"></img></span>
                                        <span style={{marginTop: "5%"}}>
                                            <div className="a101">Doctor</div>
                                            <div className="a102">Consultation</div>
                                            <div style={{textAlign: "left"}}><Button className="btnPart2">Read More...</Button></div>
                                        </span>
                                    </div>
                                    <div className="cardDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
                <div className="portion3">
                    <div className="part3Imgcontainer">
                        <img src={Pic1C3} alt="part3img" className="portion3Img"></img>
                        <div className="part3Nos">
                            <span className="part3NosContent">
                                <div class="green1">
                                    <span class="blue3">59</span> K
                                </div>
                                <div class="gray">
                                    Downloads
                                </div>
                            </span>
                            <span className="part3NosContent">
                                <div class="green1">
                                <span class="blue3">49</span> K
                                </div>
                                <div class="gray">
                                    Happy Customers
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="part3Content">
                        <h4 className="part3ContentH1">How to use it ?</h4>
                        <h2 className="part3ContentH2">How does our online consultation work ?</h2>
                        <div className="x101">
                            <img className="x103" src={UseStep1} alt="usestep1"></img>
                            <div className="x102">
                                <img src={Step1C3} alt="step1c3"></img>
                                Fill up your medical application form.
                            </div>
                        </div>
                        <div className="x101">
                            <img className="x103" src={UseStep2} alt="usestep2"></img>
                            <div className="x102">
                                <img src={Step2C3} alt="step2c3"></img>
                                Getting a consulting physician in minutes.
                            </div>
                        </div>
                        <div className="x101">
                            <img className="x103" src={UseStep3} alt="usestep3"></img>
                            <div className="x102">
                                <img src={Step3C3} alt="step3c3"></img>
                                Pay the consultation fees online.
                            </div>
                        </div>
                        <div className="x101">
                            <img className="x103" src={UseStep4} alt="usestep4"></img>
                            <div className="x102">
                                <img src={Step4C3} alt="step4c3"></img>
                                Get diagnosis and prescription.
                            </div>
                        </div>
                    </div>
                </div>
                <Comp1 />
                <div className="portion5">
                    <div className="portion51">
                        <div className="x510">
                            <h1 className="x5H1">
                                Join our team
                            </h1>
                            <div className="portion51Content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                        <div className="x511">
                            <Button>
                                Click Here
                                <i className="x511Btn" class="fas fa-arrow-right" style={{marginLeft: "5%"}}></i>
                                
                            </Button>
                        </div>
                    </div>
                    <div className="portion52">
                        <h4 className="x5H2">Search by Doctor's Name..</h4>
                        <SearchPage
                            holder="Doctor's Name..."
                        />
                    </div>
                </div>
                <div className="portion6">
                    <div className="portion61">
                        <div className="portion61Content">
                            <h1 className="x6H1">
                                Who we are 
                            </h1>
                            <div className="x6C1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.
                            </div>
                            <div className="x6C2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. 
                            </div>
                            <div className="portion6LeftBtnDiv">
                                <Button className="portion6LeftBtn"> Read More</Button>
                            </div>
                        </div>
                        <div className="portion612">
                            <Button className="circularBtn"><i class="fas fa-caret-right"></i></Button>
                        </div>
                    </div>
                    
                </div>
                <div className="portion62">
                        <div className="p621">
                            Our<br/> Specialities
                        </div>
                        <div className="p622">
                            <img src={part5Img1} alt="part5Img" style={{float: "left"}}></img>
                            General Medicine
                        </div>
                        <div className="p623" style={{float: "left"}}>
                            <img src={part5Img2} alt="part5Img"></img>
                            Cardiology
                        </div>
                        <div className="p624" style={{float: "left"}}>
                            <img src={part5Img3} alt="part5Img"></img>
                            Orthopedics
                        </div>
                        <div className="p625">
                            <i class="fas fa-arrow-left" style={{padding: "2%", background: "white",color: "#3366cc",marginRight: "2%"}}></i>
                            <i class="fas fa-arrow-right" style={{padding: "2%", background: "white",color: "#3366cc"}}></i>
                        </div>
                </div>
                <div className="portion7">
                    <div className="p71">
                        <div className="p71Header">
                            Make an <span >Appointment</span>
                        </div>
                        <div>
                            <Form>
                                <div className="p711">
                                    <Form.Control size="md" 
                                                  type="text" 
                                                  placeholder="Search by Doctor,Speciality,Clinic..."
                                                  style={{width: "60%",margin: "2%",marginRight: "0px",color: "#000099"}}              
                                    />
                                    {['radio'].map(type => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Doctor" type={type} id={`inline-${type}-1`} className="radioBtns1" />
                                        <Form.Check inline label="Clinic" type={type} id={`inline-${type}-2`} className="radioBtns1" />
                                        </div>
                                    ))}
                                </div>
                                <div className="p712">
                                    <Form.Group  controlId="formGridState" style={{width: "20rem",margin: "2%"}}>
                                        <Form.Control as="select" style={{color: "#000099", fontWeight: "600"}}>
                                            <option>Select Speciality</option>
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group  controlId="formGridState" style={{width: "20rem",margin: "2%"}}>
                                        <Form.Control as="select"  style={{color: "#000099", fontWeight: "600"}}>
                                            <option>Select Location</option>
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="p713" style={{color: "#000099 !important",fontWeight: "600 !important"}}>
                                    <div className="datePicker">
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                            
                                        /> 
                                    </div>
                                    <Form.Group  controlId="formGridState" style={{width: "20rem",margin: "2%"}}>
                                        <Form.Control as="select"  style={{color: "#000099", fontWeight: "600"}}>
                                            <option>Select Time Slot</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="p714">
                                    <button type="button" class="btn btn1">Proceed to Payment <i class="fas fa-arrow-right arrow1"></i></button>
                                    {/* <input type="submit" value="Proceed to Payment " className="p71Submit" /> */}
                                    {/* <i class="fas fa-arrow-right"></i> */}
                                </div>
                            </Form>
                        </div>  
                    </div>
                    <div className="p72">
                        <div className="p72Header">
                            Download our <span style={{color: "red"}}>App</span>
                        </div>
                        <div className="storeIconsContainer">
                            <div className="storeContainer1">
                                <img src={StoreIcon1} alt="storeIcons" className="storeIcons"></img>
                                <div className="imgTitle">Apple App Store</div>
                            </div>
                            <div className="storeContainer2">
                                <img src={StoreIcon2} alt="storeIcons" className="storeIcons"></img>
                                <div className="imgTitle">Google Play Store</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portion8">
                    <div className="portion8Content">
                        <h2 className="p8Content">
                            We provide <span className="p8Red">Medical Tourism</span> facilities.
                        </h2>
                        <Button className="p8Btn">
                            Learn More
                            <i class="far fa-arrow-alt-circle-right"
                                style={{color: "red",marginLeft: "1%",background: "white",padding: "2px"}}
                            ></i>
                        </Button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;