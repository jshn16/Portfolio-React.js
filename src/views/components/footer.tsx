import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <a target="_blank" className="icon" href="https://www.linkedin.com/in/jshnsaini/"><LinkedInIcon /></a>
          <a target="_blank" className="icon" href="https://github.com/jshn16"><GitHubIcon /></a>
          <a target="_blank" className="icon" href="https://www.instagram.com/jshnsaini/"><InstagramIcon /></a>
        </div>
        <div>
          <span>&copy; 2024 jshnsaini</span>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
