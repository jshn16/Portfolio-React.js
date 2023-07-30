import React from "react";
import myPhoto from '../../assets/my-photo.jpg'
function About() {
    return (
        <div className="box">
            <h1 className="bold">About</h1>
            <hr />
            <div className="about">
                <div className="aboutPhotoHolder">
                    <img src={myPhoto} />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto enim repellat est dicta, in autem incidunt eos provident alias minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem sint fuga aut eos magni eligendi dicta ullam dolor officiis?</p>
                </div>
            </div>
        </div>
    )
}

export default About;