import React from "react";

import graphicDesiginingLogo from '../../assets/graphic-designing.png'
import webDevelopmentLogo from '../../assets/web-development.png'
import webDesigningLogo from '../../assets/web-designing.png'
import digitalMarketingLogo from '../../assets/digital-marketing.png'

function Services() {
    return (
        <div className="box">
            <h1 className="bold">Services</h1>
            <hr />
            <section>
                <div className="holder">
                    <div className="image-holder-services">
                        <img src={graphicDesiginingLogo} />
                    </div>
                    <div>
                        <h5>Graphic Designing</h5>
                        <p>
                            Graphic Design Specialist with 2+ years of experience in the
                            management of the complete design process, from conceptualization
                            to delivery. Expert at interdepartmental coordination and
                            communication. Skilled with Adobe Creative Suite (Illustrator,
                            Photoshop, and InDesign)
                        </p>
                    </div>
                    <div>
                        <button className="btn-common">Case Study</button>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img src={webDesigningLogo} />
                    </div>

                    <div>
                        <h5>Web Designing</h5>
                        <p>
                            Enthusiastic and self-motivated web designer with 3+ years of
                            experience. Bringing top-class frontend development, UX, and
                            visual design skills. I specialize in UX and UI designing to create
                            websites that don't just do business but focus on clarity.
                            Webpages are designed and developed using latest principles,
                            trends and techiques.
                        </p>
                    </div>

                    <div>
                        <button className="btn-common">Case Study</button>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img src={digitalMarketingLogo} />
                    </div>
                    <div>
                        <h5>Digital Marketing</h5>
                        <p>
                            An organized and creative professional with proven marketing
                            skills and a desire to learn more. Possess 2+ years of experience
                            working for clients. Gained expertise in data analysis,
                            publication marketing, and web-based advertising.
                        </p>
                    </div>
                    <div>
                        <button className="btn-common">Case Study</button>
                    </div>
                </div>

                <div className="holder">
                    <div className="image-holder-services">
                        <img src={webDevelopmentLogo} />
                    </div>
                    <div>
                        <h5>Web Development</h5>
                        <p>
                            Providing execellent building and maintenance of websites. Having
                            great web development skills like HTML5,CSS3,JavaScript, PHP, C#,
                            and React. Developed dynamic and interactive websites that ensured
                            high user traffic, page views and page SEO rankings.
                        </p>
                    </div>
                    <div>
                        <button className="btn-common">Case Study</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
