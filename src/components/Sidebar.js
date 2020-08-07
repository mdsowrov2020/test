import React,{useState,useEffect} from 'react'
import { Blog_Right } from './Cards'
import {Author} from './Data';
import blogPost from '../data/blog.json';
import { NavLink } from 'react-router-dom';

export const Sidebar =(props) => {


    const [posts,setPosts] = useState([]);
    
  
    useEffect(()=>{
        
         const posts =blogPost.data;
         setPosts(posts);
    },[posts]);
    return (

                   
        
        <>
        <Blog_Right>

            {Author.map((val)=>{
                return(
                    <div className="author text-center">
                    <div className="author_image">
                        <img src={val.imgsrc}/>
                    </div>
                    <div className="author_name">
                        <h3>{val.name}</h3>
                        
                    </div>
                </div>
                )
            })}

        
        </Blog_Right>
        <Blog_Right>
        <div className="cardHeader text-center">
                    <span>Recent Posts</span>
        </div>
        <div className="recent_post">
        

         {posts.map((post)=>{
             return(
                <NavLink  className="nav-link" key={post.id} to={`/blog/${post.id}`}>
                  
                <div className="row justify-content-center ">
              
              <div className="col-lg-12">
                      <div className="row" >
                      
                        <div className="col-lg-4">
                          <div className="blog_right_image">
                       <img src={post.imgsrc}/>
                      </div>
                          </div>
                          <div className="col-lg-8">
                          <div className="blog_right_content">
                          <h3>{post.title}</h3>
                          <span>Posted on {post.post_date}</span>
                          </div>
                          </div>
                       
                      </div>
                  </div>
             
              </div>
               </NavLink>
             )
         })}

        </div>
        </Blog_Right>
        
      
        
        </>
       
    )
}
