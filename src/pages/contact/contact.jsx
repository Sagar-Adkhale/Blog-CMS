import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import contactlogo from '../../asset/contact.png';
import Alert from 'react-bootstrap/Alert'
export default function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false);

  function AlertDismissible() {
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading><b>Thanks for being awesome!</b></Alert.Heading>
          <p>
          We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. 
          </p>
          <p>
          Otherwise, we will reply by email as soon as possible.
          </p>
          <hr />
          <p><b>Talk to you soon, GUTS</b></p>
        </Alert>
  
      </>
    );
  }
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(process.env.REACT_APP_YOUR_SERVICE_ID);

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
       
        setShow(true);
        window.setTimeout(()=>{
          setShow(false);
        },20000)
          console.log("result",result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <div>
    <div className="contact3 py-5">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          
            <img src={contactlogo} className="img-fluid" alt=""/>
          
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 style={{marginLeft:"20px"}} className="font-weight-light mt-2">Quick Contact</h1>
            <form style={{margin:"20px"}}ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" name="name" placeholder="name"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="email" name="email" placeholder="email address"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control" type="text" name="phone" placeholder="phone"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea className="form-control" rows="3" name="message" placeholder="message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2" value="Send" ><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
          <AlertDismissible />

        </div>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className=" col-lg-4 col-md-4">
                <div className="boxes card-body d-flex align-items-center c-detail pl-0">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt=""/>
                  </div>
                  <div className="boxes">
                    <h5 className="font-weight-medium">Address</h5>
                    <div className="">Sunshine Tower SunCity<br/> Vasai West Palghar<br/>  Maharashtra 401202</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt=""/>
                  </div>
                  <div className="boxes">
                    <h5 className="font-weight-medium">Phone</h5>
                    <div className="">
                    8169658007</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt=""/>
                  </div>
                  <div className="boxes">
                    <h5 className="font-weight-medium">Email</h5>
                    <div className="">
                      gutsindia2020@gmail.com
                    </div>
                  </div>
                </div>
              </div>
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
