import '../css/overdose.css'
import SMART from '../pictures/SMART.png'
import Shatterproof from '../pictures/Shatterproof.png'
import NA from '../pictures/NA.png'
import ARG from '../pictures/ARG.png'
import CIR from '../pictures/CIR.png'
import CR from '../pictures/CR.png'
import NIDA from '../pictures/NIDA.png'
import SAMHSA from '../pictures/SAMHSA.png'
const R1 = () =>{
    window.open = "https://www.google.com";
}

const Overdose = () => {
    return ( 
        <div className="overdoseContainer">
            <div className='resourcesTitle'><h2>Resources</h2></div>
            <div className='resourcesBody'>
                <div className='C1'>
                    <div className='cardR1' onClick={R1}><div className='cardHeaderR'><h3 className='h1'>ARG</h3></div><div className='logo1'><img src={ARG}></img></div></div>
                    <div className='cardR2'><div className='cardHeaderR'><h3 className='h2'>SMART Recovery</h3></div><div className='logo2'><img src={SMART}></img></div></div>
                    </div>
                <div className='C1'>
                <div className='cardR3'><div className='cardHeaderR'><h3 className='h3'>Shatterproof</h3></div><div className='logo3'><img src={Shatterproof}></img></div></div>
                <div className='cardR4'><div className='cardHeaderR'><h3 className='h4'>Narcotics Anonymous</h3></div><div className='logo4'><img src={NA}></img></div></div>
                </div>
                <div className='C1'>
                <div className='cardR5'><div className='cardHeaderR'><h3 className='h5'>Catholic in Recovery</h3></div><div className='logo5'><img src={CIR}></img></div></div>
                <div className='cardR6'><div className='cardHeaderR'><h3 className='h6'>SAMHSA</h3></div><div className='logo6'><img src={SAMHSA}></img></div></div>
                </div>
                <div className='C1'>
                <div className='cardR7'><div className='cardHeaderR'><h3 className='h7'>Celebrate Recovery</h3></div><div className='logo7'><img src={CR}></img></div></div>
                <div className='cardR8'><div className='cardHeaderR'><h3 className='h8'>National Insitiute on Drug Abuse</h3></div><div className='logo8'><img src={NIDA}></img></div></div>
                </div>
            </div>
        </div>
     );
}
 
export default Overdose;