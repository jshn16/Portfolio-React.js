import React, { useEffect } from "react";
import myPhoto from '../../assets/my-photo.jpg'
function About() {

    useEffect(() => {
        document.title = 'About'
    }, [])
    return (
        <div className="box">
            <h1 className="bold">About</h1>
            <hr />
            <div className="about">
                <div className="aboutPhotoHolder">
                    <img title="Jashan" src={myPhoto} alt="myPicture" />
                </div>
                <div>
                <p>I'm a <span>Web Designer</span> responsible for designing web application's layout, usability, and visual appearance. My work revolves around creating the layout and visual aspects of a website. I design mood boards, wireframes, logos and everything from scratch for multiple web applications. Specialize in designing user experience, user interface and visual designs that catch visitors' attention faster than light. On the other hand, being a <span>Web Developer</span> my work involves building and maintaining the core structure of a website, fixing common bugs and maintaining them. My work starts from taking the ideas and concepts from designs, bringing designs to real life by complex coding and advanced programming languages then configuring the server and databases on the back end, as well as incorporating user-facing features and functionality and eventually performing testing and debugging before the final launch.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;