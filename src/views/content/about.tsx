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
                    <img src={myPhoto} alt="myPicture" />
                </div>
                <div>
                    <p>I'm a <span>web designer</span> who is responsible for designing the layout, usability, and visual appearance of web applications. My work revolves around creating the layout and visual aspects of a website. I design mood boards, wireframes, logos and everything from scratch for multiple web applications. Specialize in designing user experience, user interface and visual designs that catch the attention of visitors faster than light. On the other hand, being a <span>web developer</span> my work involves building and maintaining the core structure of a website, fixing common bugs and maintaining them. My work starts from taking the ideas and concepts from designs, bringing designs to real life by complex coding and advanced programming languages then configuring the server and databases on the back end, as well as incorporating user-facing features and functionality. Eventually performing testing and debugging before the final launch.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;