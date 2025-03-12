import '../css/AboutUsHome.css'
import mason from '../pictures/familyImg.jpeg'
const AboutUsHome = () => {
    return ( 
        <div className='mainContainer'>
                <img src={mason} alt="Picture of Mason Bradley Holmberg"></img>
                <div className="aboutUsBody">
                            <h2>OUR STORY</h2>
                            <p>
                            We were an ordinary family of four until fentanyl tore us apart. Our son Mason thrived until college, where addiction took hold. Despite rehab and counseling, he was poisoned by fentanyl—a tragedy that blindsided our middle-class family. Now, we share Mason's story to save others from our heartbreak and honor the son we couldn't save.
                            </p>
                        </div>
        </div>
     );
}
 
export default AboutUsHome;