import React, { useEffect } from "react";
import Pdf from '../../assets/resume.pdf'
import fileSaver from 'file-saver';
import { Link } from "react-router-dom";

function Home() {

    const saveFile = () => {

        fileSaver.saveAs(Pdf, 'web-developer.pdf')
    }

    useEffect(() => {
        document.title = 'Home'
    }, [])


    return (

        <div className="box">
            <h1 className="bold">Home</h1>
            <hr />
            <section className="home-box">
                <div>
                    <h2>Hi, My Name is Jashan</h2>
                </div>

                <div>
                    <p>A Full Stack Developer with two years of professional experience, specializing in <span>web development, web designing, UX/UI desiginig, project management, agile methodology, and quality assurance testing </span>. Adept at coordinating effectively with development teams, clients, and non-technical stakeholders to execute complex web development projects.</p>
                </div>

                <div>
                    <Link to={'/about'} className="btn-common">Know More</Link>
                    <a className="btn-common" onClick={saveFile} >Download Resume</a>
                </div>
            </section>

        </div>
    );
}

export default Home;
