import React, { Component } from 'react'
import {Blog_Data} from './Data';
import { Blog_Left, Blog_Right } from './Cards';
import {Post} from './Post';
import {Sidebar} from './Sidebar';
import {Footer} from '../components/Footer';



export const Blog = (props) => {

                    return(                        
                            <div>
                                
                                <section>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                            <Post {...props}/>
                                            </div>
                                        
                                        <div className="col-lg-4">
                                        <Sidebar {...props}/>
                                        </div>
                                       
                                        </div>
                                    </div>
                                </section>
                            </div>
                    )

}


