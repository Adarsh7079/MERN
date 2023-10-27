import React from 'react'
import { Form } from 'react-router-dom';

const Contact=()=> {
  return (
    <div>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row"></div>
                <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                    {/* for phone no */}
                    <div className="contact_info_item d-flex justify-content-start align-item-center">
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                phone
                            </div>
                            <div className="contact_info_text">
                                +9121912121
                            </div>
                           
                        </div>
                    </div>
                    <div className="contact_info_item d-flex justify-content-start align-item-center">
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                email
                            </div>
                            <div className="contact_info_email">
                                adadasd@gmail.com
                            </div>
                            
                        </div>
                    </div>
                    <div className="contact_info_item d-flex justify-content-start align-item-center">
                        <div className="contact_info_content">
                            <div className="contact_info_title">
                                address
                            </div>
                            <div className="contact_info_text">
                                adasdasdasd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* contact us form */}

        <div className="contct_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lf-1">
                        <div className="contact_form_container py-5">
                            <div>
                                Get In Touch
                            </div>
                        </div>
                        <form id="contact_form">
                            <div className="contact_form_name d-flex justify_content-between align-item-center">
                                <input type="text" id="contact_form_name"
                                 className="contct_form_name "
                                 placeholder='your name'
                                 require="true"
                                />
                                 <input type="email" id="contact_form_emil"
                                 className="contct_form_emil"
                                 placeholder='your email'
                                 require="true"
                                />
                                 <input type="number" id="contact_form_phone"
                                 className="contct_form_phone"
                                 placeholder='your phone'
                                 require="true"
                                />
                            </div>
                            <div>
                                <textarea id="" cols="30" rows="10" placeholder="message"></textarea>
                            </div>
                            <div>
                               <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact;