import React, { Component } from 'react';
import {Footer_Data} from './Data';
import {Footer_Content} from './Cards';



export class Footer extends Component {
    render() {
        return (
            <div className="footer_svg">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E1DADD" fillOpacity="1" d="M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,
                203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
            <section className="">
                <div className="footer_section">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                      {Footer_Data.map((val, index)=>{
                          return(
                              <Footer_Content
                              key = {index}
                              phone = {val.phone}
                              footer_tw = {val.footer_tw}
                              footer_fb = {val.footer_fb}
                              footer_in = {val.footer_in}
                              footer_ln = {val.footer_ln}
                              
                              />
                          )
                      })}
                    </div>
                </div>
            </div>
                </div>
         
        </section>
            </div>
              
            
        )
    }
}



