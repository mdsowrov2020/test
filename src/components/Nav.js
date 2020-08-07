import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
// window.addEventListener('scroll', function () {
//   var nav = document.querySelector('custom_nav');
//   nav.classList.toggle('sticky', window.scrollY > 40);
// });
// When the user scrolls the page, execute myFunction

export class Menu extends Component {
  componentDidMount() {
    $('.hide_nav').on('click', function () {
      window.$('.navbar-collapse').collapse('hide');
      console.log('test');
    });

    $('ul li').on('click', function () {
      window
        .$(this)
        .addClass('nav_active')
        .siblings()
        .removeClass('nav_active');
    });

    window.onscroll = function () {
      myFunction();
    };

    // Get the navbar
    var navbar = document.getElementById('navbar');

    // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg custom_nav' id='navbar'>
        <div className='container'>
          {/* <a className="navbar-brand" href="#">SEO</a> */}
          <Link className='nav-link' to='/'>
            SEO
          </Link>
          <button
            className='navbar-toggler '
            type='button'
            data-toggle='collapse'
            data-target='#mynav'
            aria-expanded='false'
            aria-controls='mynav'
          >
            <span className='navbar-toggler-icon'>
              <i className='fas fa-bars'></i>
            </span>
          </button>

          <div className='collapse navbar-collapse' id='mynav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item nav_active'>
                <Link className='nav-link hide_nav' to='/'>
                  Home{' '}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link hide_nav' to='/services'>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link hide_nav' to='/price'>
                  Pricing
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link hide_nav' to='/portfolio'>
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link hide_nav' to='/blog'>
                  Blog
                </NavLink>
              </li>
              <li className='nav-item'>
                <Link className='nav-link hide_nav' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
