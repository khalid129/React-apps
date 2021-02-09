import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (<>
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="https://www.youtube.com/"><YouTubeIcon/></a>
                    <a href="https://github.com/"><GitHubIcon/></a>
                    <a href="https://twitter.com/MKhalid_129"><TwitterIcon/></a>
                    <a href="https://www.facebook.com/"><FacebookIcon/></a>
                </div>
                {/* <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul> */}
                <p className="copyright">Company Name © 2018</p>
            </footer>
        </div>
    </>);   
}

export default Footer;