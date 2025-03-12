import '../css/CallToAction.css'

const CallToAction = () => {
    const handleCLick = () => {
        const form = document.getElementById("contactUsCard");
        form.scrollIntoView({
            behavior: "smooth",  // For smooth scrolling
            block: "start"      // Scroll to the top of the div
        });
        setTimeout(100);
        alert("Please fill out the following form and a member of our team will get back to you.");
    }


    return ( 
        <div className='callToActionContainer'>
            <div id = 'callToActionimg'>
                <div id = 'callToActionOverlay'></div>
            </div>
            <div id = 'callToActionCard'>
                <h2>SEND US YOUR STORY</h2><br></br><p>We want to hear your voice. Help us share your story to memorialize those we've lost and spread awareness about the dangers of fentanyl poisoning. Your experiences can bring light to this crisis, inspire others to take action, and honor the lives impacted by this epidemic. By sharing your story, you become part of a movement that educates, advocates, and offers hope in the fight against fentanyl. Together, we can make a difference.</p>
                <button className='callToActionButton' onClick={handleCLick}>SHARE YOUR STORY</button>
            </div>
        </div>
     );
}
 
export default CallToAction;