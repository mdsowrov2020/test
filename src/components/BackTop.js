import React, { Component } from 'react';
import $ from 'jquery';

export class BackTop extends Component {
    componentDidMount(){
        $(window).scroll(function(){
    
            var scrollto = $(window).scrollTop();
    
            //back top btn
    
            if(scrollto> 200){
                $('.backto-top').fadeIn(1000);   
            }else{
                $('.backto-top').fadeOut(1000); 
            }
    
    
    
        })
    
        $('.backto-top').click(function(){
            $('html, body').animate({
                scrollTop: 0                    
            },500)
        })
    }
    render() {
        return (
            
            <div className="backto-top">
                           <i className="fas fa-arrow-up"></i>
            </div> 
        )
    }
}

