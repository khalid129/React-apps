import React from 'react';
import './contact.css';
import './index.css';

function Contact() {
    return (<>
        <h3 className="heading">Contact Form</h3>
        <div className="container">
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="pakistan">Pakistan</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    </>);
}

export default Contact; 