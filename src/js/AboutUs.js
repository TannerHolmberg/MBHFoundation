import Navbar from "./navbar";
import '../css/AboutUs.css';


const AboutUs = () => {
    return ( <div>
        <Navbar />
        <div className="OurMission">
            <div className="ourMissionText">
            <h1>Our Mission</h1>
            <p>At the Mason Bradley Holmberg Foundation, our mission is to raise awareness about the devastating impact of fentanyl overdose, honor the memory of Mason Bradley Holmberg, and support individuals and families affected by addiction. We are committed to educating communities, advocating for policy change, and providing resources for prevention, recovery, and healing. Through our work, we strive to create a future where no one suffers the loss of a loved one to fentanyl, and where every person battling addiction has the support they need to rebuild their life. Together, we aim to turn grief into action and make a lasting impact in the fight against fentanyl.</p>
            </div>
            <div className="familyImageBackground">
                <div className="familyImage"></div>
            </div>
        </div>
        <div className="PeopleContainer">
            <div className="pfp"><div className="pfpImage" id="bradImg"></div></div>
            <div className="pfpText">
                <h1 className = "pfpName">Brad Holmberg</h1>
                <p className = "pfpDescription">Brad Holmberg, a father who endured the heartbreaking loss of his son, Mason, to a fentanyl overdose in 2021, has turned his grief into action. Mason’s death deeply impacted Brad, but it also fueled a passion to honor his son’s life and raise awareness about the devastating effects of fentanyl. Alongside his wife, Stacey, Brad co-founded the Mason Bradley Holmberg Foundation to combat the fentanyl epidemic and provide support to families affected by overdose. Through the foundation, Brad continues to fight for a future where no parent has to endure the pain of losing a child to addiction.</p>
            </div>
        </div>
        <div className="PeopleContainer" id="staceyContainer">
            <div className="pfpText">
                <h1 className = "pfpName">Stacey Holmberg</h1>
                <p className = "pfpDescription">Stacey Holmberg, Mason’s mother, has carried the profound sorrow of losing her son to fentanyl addiction. Despite the pain, Stacey found strength in her desire to keep Mason’s memory alive and make a difference in the fight against fentanyl. After Mason’s death in 2021, Stacey, alongside her husband Brad, co-founded the Mason Bradley Holmberg Foundation to raise awareness about the dangers of fentanyl and support others battling addiction. Through the foundation, Stacey channels her grief into advocacy, working tirelessly to ensure that Mason’s story becomes a catalyst for change and prevention.</p>
            </div>
            <div className="pfp"><div className="pfpImage" id="momImg"></div></div>
        </div>
        <div className="PeopleContainer">
            <div className="pfp"><div className="pfpImage" id="tannerImg"></div></div>
            <div className="pfpText">
                <h1 className = "pfpName">Tanner Holmberg</h1>
                <p className = "pfpDescription">Tanner Holmberg served in the U.S. Navy on submarines, but it was the heartbreaking loss of his brother Mason to a fentanyl overdose in 2021 that truly shaped his path. Devastated by Mason’s death, Tanner felt a deep need to honor his brother’s memory. This journey led him to create a website dedicated to Mason, memorializing his life and passions. Through this process, Tanner discovered his own calling in computer science, using his skills to turn his grief into a lasting tribute and a meaningful pursuit of healing.</p>
            </div>
        </div>
        <div className="OurStory">
        <div className="videoBorder">
            <iframe src="https://www.youtube.com/embed/reO3XNiuBxs?si=6x9E623tH0RdP5fU" title="Our Story" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="OurStoryDescription">
            <h1 className="ourStoryHeader">Our Story</h1>
            <p className="ourStoryBody">Mason Holmberg was an athletic, intelligent, and charismatic young man with a deep love for his family and sports. He dreamed of being a quarterback and had a passion for the Texas Longhorns, sharing unforgettable moments with his family at games. Mason was known for his determination, humor, and infectious spirit, making him a joy to be around.
After graduating high school, Mason attended Texas State University. However, during his second year, things began to change. He started struggling with addiction, initially using drugs to cope with anxiety. Despite multiple rehab attempts, the hold of addiction grew stronger, leading to a tragic overdose.
Mason’s family always supported him, never giving up on him, even when things were at their hardest. His tragic passing due to a fentanyl overdose serves as a stark reminder of how dangerous and unpredictable this drug is. Mason’s story is one of loss, love, and the devastating consequences of fentanyl.</p>
        </div>
        </div>
    </div> );
}
 
export default AboutUs;