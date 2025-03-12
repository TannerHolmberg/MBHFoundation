import "../css/memorial.css"

const MemorialCard = ({name, date, story}) => {
    return ( 
    <div id = "memorialCardBackground">
        <div id = "memorialCardForeground">
            <div id = 'imageCont'></div>
            <div id = "nameCont"><h1>{name}</h1></div>
            <div id = "dateCont"><p>{date}</p></div>
            <div id = "storyCont"><p>{story}</p></div>
        </div>
    </div> 
    );
}
 
export default MemorialCard;