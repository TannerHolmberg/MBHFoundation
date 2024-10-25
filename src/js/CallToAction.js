import '../css/CallToAction.css'

const CallToAction = () => {
    return ( 
        <div className='callToActionContainer'>
            <div id = 'callToActionimg'>
                <div id = 'callToActionOverlay'></div>
            </div>
            <div id = 'callToActionCard'>
                <h2>SEND US YOUR STORY</h2><br></br><p>We want to hear your voice. Help us share your story to memorialize those we've lost and spread awareness about the dangers of fentanyl poisoning. Your experiences can bring light to this crisis, inspire others to take action, and honor the lives impacted by this epidemic. By sharing your story, you become part of a movement that educates, advocates, and offers hope in the fight against fentanyl. Together, we can make a difference.</p>
                <button className='callToActionButton'>SHARE YOUR STORY</button>
            </div>
            <div id ="backlight"></div>
        </div>
     );
}
 
export default CallToAction;