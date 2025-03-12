import Navbar from "./navbar";
import MemorialCard from "./memorialCard";
import '../css/memorial.css'
import { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Memorial = () => {

    const [memorials, setMemorials] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items to display per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPages = Math.ceil(memorials.length / itemsPerPage);
    const currentItems = memorials.slice(indexOfFirstItem, indexOfLastItem);




    function formatTimestamp(timestamp) {
        const date = new Date(timestamp); // Parse the timestamp into a Date object
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        // Define the API endpoint
        const apiEndpoint = 'https://api-mbhfoundation.com';
    
        // Fetch data from the server
        const fetchMemorials = async () => {
            try {
                console.log(`Fetching data from: ${apiEndpoint}`);
                
                // Make the HTTP GET request to the API
                const response = await fetch(apiEndpoint);
    
                // Check if the response status indicates success
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                // Parse the JSON response
                const data = await response.json();
                console.log('Data fetched successfully:', data);
    
                // Update the state with the fetched data
                setMemorials(data);
            } catch (error) {
                // Log any errors that occur during the fetch
                console.error('Error fetching memorials:', error);
            }
        };
    
        // Call the fetch function
        fetchMemorials();
    }, []);

    useEffect(() => {
        console.log(memorials);
    }, [memorials]);

    return ( 
        <div>
            <Navbar />
            
            <div id = "memorialTitle">
                <h1>In Memory of Those We Love</h1>
            </div>
            
                <div id = "cardContainer">
                {currentItems.map((currentItems, index) => (
                    <MemorialCard 
                    key={index} 
                    name={currentItems.name} 
                    date={`${formatTimestamp(currentItems.birth_date)} - ${formatTimestamp(currentItems.death_date)}`} 
                    story={currentItems.story} 
                  />
                ))}
                <div className = "pagination">
                    <div className="paginationButtonOutline">
                    <button className="paginationButton" 
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}><ArrowBackIcon />
                    </button>
                    </div>
                    <div className="pageCounterBorder">
                    <div className="pageCounter"><h3>{currentPage}</h3></div>
                    </div>
                    <div className="paginationButtonOutline">
                    <button className="paginationButton"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    >
                        <ArrowForwardIcon />
                    </button>
                    </div>
                </div>
                </div>
            </div>
     );
}
 
export default Memorial;