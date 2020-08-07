import React,{useState,useEffect} from 'react'
import { Blog_Left } from './Cards';
import blogPost from '../data/blog.json';

export const  Post = (props) => {

    const [post,setPost] = useState({
        id:"",
        imgsrc:"",
        pera:""
    });
    const [blogid, setBlogId] = useState('');
  
    useEffect(()=>{
        const blogid = props.match.params.blogid;
        const post = blogPost.data.find(post => post.id == blogid);
       setPost(post);
       setBlogId(blogid);
    },[post,props.match.params.blogid]);

    if(post.imgsrc == "") return null;
    return (
        
            <Blog_Left>
                      <div className="row">
                                <div className="col-lg-12 px-2">
                                            <div className="blog_left_post">
                                            <div className="blog_left_image">
                                            <img src={post.imgsrc}/>
                                            </div>
                                                <div className="blog_left_content">
                                                <h3>{post.title}</h3>
                                                <span>Posted on {post.post_date}</span>
                                                <p>{post.pera}</p>
                                                </div>
                                            </div>
                                        </div>
                              
                            </div>
            </Blog_Left>
        
    )
}
