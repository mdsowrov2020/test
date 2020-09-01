import React, { Component } from 'react';
// import { Blog_Data } from '..Data/Data';
// import { Blog_Left, Blog_Right } from '../Cards';
import { Post } from './Post';
import { Sidebar } from './Sidebar';

export const Blog = (props) => {
  return (
    <div>
      <section className='pb-3'>
        <div className='blog_banner d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='blog_banner_content'>
                  <h2>Latest Blogs</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <Post {...props} />
            </div>

            <div className='col-lg-4'>
              <Sidebar {...props} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
