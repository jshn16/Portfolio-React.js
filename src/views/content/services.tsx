import React, { useEffect } from "react";

import graphicDesiginingLogo from "../../assets/graphic-designing.png";
import webDevelopmentLogo from "../../assets/web-development.png";
import webDesigningLogo from "../../assets/web-designing.png";
import digitalMarketingLogo from "../../assets/digital-marketing.png";

function Services() {
    useEffect(() => {
        document.title = "Services";
    }, []);

    return (
        <div className="box">
            <h1 className="bold">Services</h1>
            <hr />
            <section className="wrapper">
                <div className="holder">
                    <div className="image-holder-services">
                        <img title="Graphic Designing" src={graphicDesiginingLogo} alt="appIcon" />
                    </div>
                    <div>
                        <h5>Graphic Designing</h5>
                        <p>
                            Graphic Design Specialist with 2+ years of experience in the creation of visual concepts with the goal of attracting the interest of clients through digital and physical designs that typically use graphics, images, art, and other visual elements. 
                            <ul className="highlights">
                                <li>
                                    Skilled with Canva, Adobe Creative Suite (Illustrator,
                                    Photoshop, and InDesign) and Figma
                                </li>

                                <li>
                                    Developed illustrations,logos, wireframes, brochures, user
                                    personas, and layouts for web applications or print media
                                </li>

                                <li>
                                    {" "}
                                    Using elements such as shapes, colors, typefaces, typography,
                                    images and more to convey ideas to an audience
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img title="Web Designing" src={webDesigningLogo} alt="appIcon"/>
                    </div>

                    <div>
                        <h5>Web Designing</h5>
                        <p>
                            Enthusiastic and self-motivated web designer with 3+ years of
                            experience. Bringing top-class frontend development, UX, and
                            visual design skills. I specialize in UX and UI designing to
                            create websites that don't just do business but focus on clarity.
                            <ul className="highlights">
                                <li>
                                    Designing visual imagery for websites and ensuring that they
                                    are in line with branding for clients.
                                </li>
                                <li>
                                    Establishing design guidelines, standards, and Maintaining the
                                    appearance of websites by enforcing content standards.
                                </li>

                                <li>
                                    Establishing design guidelines, standards, best practices and
                                    Maintaining the appearance of websites by enforcing content
                                    standards.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img title="Digital Marketing" src={digitalMarketingLogo} alt="appIcon" />
                    </div>
                    <div>
                        <h5>Digital Marketing</h5>
                        <p>
                            An organized and creative professional with proven marketing
                            skills and a desire to learn more. Possess 2+ years of experience
                            working for clients. Gained expertise in data analysis,
                            publication marketing, and web-based advertising.
                        </p>

                        <ul className="highlights">
                            <li>
                                boosting the ranking of a website on Google and other search
                                engines to ultimately result in heightened traffic to that
                                website.
                            </li>
                            <li>
                                using email marketing to bring new customers and  nurture relationships with existing clients by keep them informed with updates, and boost their level of engagement with th brand.
                            </li>
                            <li>
                                creating compelling content across any number of different forms and channels, including articles, videos, podcasts, social-media posts, and much more
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img title="Web Development" src={webDevelopmentLogo} alt="appIcon"/>
                    </div>
                    <div>
                        <h5>Web Development</h5>
                        <p>
                            Responsible for both server-side logic and front-end logic required for designing, coding, and modifying websites, including all aspects of the website, such as layout, functionality, and user experience. Creating solutions for identified problems or bugs.

                        </p>

                        <ul className="highlights">
                            <li>Editing, writing, or designing Website content, and directing team members who produce content.</li>
                            <li>Proficient with use of Client-Side Scripting languages such as JavaScript, HTML5, CSS3. This includes selecting and styling UI components, creating layouts, and navigation</li>
                            <li>Exellent knowledge of Server-Side scripting icluding JavaScript, PHP and ASP.NET. to develop an interactive websites that communicates with the database</li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
