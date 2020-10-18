import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUs">
                <h2>Company: ThoughtWorks Local</h2>
                <h2>Location: Shenzhen</h2><br/>
                <h2>For more Information, please</h2>
                <h2>view our <Link to="/" className="link">website</Link>.</h2>
            </div>
        )
    };
}

export default AboutUs;
