import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import {Contact_Left} from './Cards';
import {Contact_Banner_Left_Data} from './Data';
import {Footer} from '../components/Footer';

export class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            message : "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

       handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            "gmail",
            "sowrovtemplate",
            ".contact_form_class",
            "user_e3WSxuBv5kiYk45ocacXz"
        )
        .then()
        .catch();
        this.setState({
            name:"",
            email: "",
            message: "",

        })
    }

    render() {
        return (
            <div>
            <section className="contact_banner contact_section">
                            <div className="container">
                                <div className="row justify-content-center">
                                <div className="col-lg-6">
                                        {Contact_Banner_Left_Data.map((val)=>{
                                            return(
                                                <Contact_Left
                                                
                                                imgsrc = {val.imgsrc}
                                                
                                                />
                                            )
                                        })}
                                      
                                    </div>
                                    <div className="col-lg-6 right_form">
                                            <div className="custom_form">
                                            <div className="contact_left_inner_content">
                                                    <h2>Contact Us</h2>
                                            </div>
                                                        <Form onSubmit={this.handleSubmit.bind(this)} className="contact_form_class">
                                                    <div className="row justify-content-center">
                                                    <div className="col-md-6">
                                                            <Form.Group controlId="formBasicEmail">
                                                            <Form.Control type="text" name="name" value= {this.state.name} placeholder="Name" className="form_input"
                                                            
                                                            onChange={this.handleChange.bind(this)}
                                                            />
                                                            <Form.Text className="text-muted">
                                                            </Form.Text>
                                                        </Form.Group>
                                                            </div>
                                                            <div className="col-md-6">
                                                            <Form.Group controlId="formBasicEmail">
                                                            <Form.Control type="email" name="email" value= {this.state.email} placeholder="Enter email" className="form_input"
                                                            
                                                            onChange={this.handleChange.bind(this)}
                                                            
                                                            />
                                                            <Form.Text className="text-muted">
                                                            </Form.Text>
                                                        </Form.Group>
                                                            </div>
                                                            <div className="col-md-12"> 
                                                            
                                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" name="message" value= {this.state.message}  rows="4" placeholder="Write message here..." 
                                                                    
                                                                    onChange={this.handleChange.bind(this)}
                                                                    
                                                                    />
                                                                </Form.Group>
                                                        </div>
                                                            <div className="col-md-12">
                                                                
                                                        <Button variant="primary" type="submit" className="btn btn-block custom_button">
                                                            Send
                                                        </Button>
                                                            </div>
                                                        </div>
                                                              </Form>
                                            </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
        )
    }
}

