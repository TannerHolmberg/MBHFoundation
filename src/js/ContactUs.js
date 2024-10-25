import '../css/ContactUs.css'
import logoContactUs from '../pictures/MBHlogo.png'

const ContactUs = () => {
    return ( 
        <div className="ContactUs">
            <div className = "Left"><h2>CONTACT US</h2><img id = "logoContactUs" src={logoContactUs}></img></div>
            <div id = "Right">
                <form id = "contactUsCard">
                    <div id ="top_left"></div>
                    <div id ="top_right"></div>
                    <div id ="bot_left"></div>
                    <div id ="bot_right"></div>
                    <label className="labels">Name</label>
                    <input type="text" className='nonMessage'></input>
                    <label className="labels">Email</label>
                    <input type="text" className='nonMessage'></input>
                    <label className="labels">Subject</label>
                    <input type="text" className='nonMessage'></input>
                    <label className="labels">Message</label>
                    <input type="text" id = "message"></input>
                    <div id="submitButBor">
                    <input type="submit" id = 'submitButton'></input>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ContactUs;