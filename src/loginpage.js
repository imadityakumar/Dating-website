import React from 'react';
import './loginpage.css';
import iosandroid from './pages/images/placeholderbuttons.png';

function Login() {
    return (
        <div className='contactform'>
            <img src={iosandroid} className='ios'></img>
            <form className='form'>
                <label>Name *</label>
                <br />
                <input />
                <br />
                <br />

                <label>Email *</label>
                <br />
                <input />
                <br />
                <br />

                <label>Phone Number *</label>
                <br />
                <input />
                <br />
                <br />

                <label>Your Device</label>
                <br />
                <select>
                    <option>iOS</option>
                    <option>Android</option>
                </select>
                <br />
                <br />

                <label>How would you describe yourself?</label>
                <br />
                <select>
                    <option>College Student</option>
                    <option>Working Professional</option>
                </select>
                <br />
                <br />

                <label>How did you hear about our app?</label>
                <br />
                <select>
                    <option>Social Media</option>
                    <option>Friends</option>
                    <option>Recent event</option>
                    <option>Local ad</option>
                </select>
                <br /><br /> <br />
                <button >SUBMIT</button>
            </form>
        </div>

    );
}

export default Login;
