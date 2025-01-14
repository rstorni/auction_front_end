import Navbar from "../components/Navbar"
import React from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import LotsCard from "../components/LotsCard";
import LotCreateForm from "../components/LotCreateForm";
import ListLots from "../components/ListLots";
import '../css/auction-lots.css'; // Import the CSS for styling

function AuctionLots() {
    const [auction, setAuction] = React.useState({})
    const { auctionId } = useParams(); // Access the auction ID from the URL

    async function fetchAuctionDetails() {
        try{
            const response = await api.get(`/auction/${auctionId}`)
            setAuction(response.data) 
        } catch (error) {
            console.error("error getting auction data", error)
        }
    }

    React.useEffect(() => {
        fetchAuctionDetails()
    }, [])

    return(
        <div className="auctionPageContainer">
            <Navbar />
            <h1 className="auctionTitle">{auction.name}</h1>
            <div className="auctionDetails">
                <span >Start Date: {auction.start_date} - End Date:{auction.start_date}</span>
                <p>{auction.details}</p>
            </div>
            <p className="auctionId">Auction ID: {auctionId}</p>
            <LotCreateForm auctionId={auctionId} className="lotCreateForm"/>
            <h2 className="lotsTitle">lots:</h2>
            <ListLots auctionID={auctionId}/>

        </div>
    )
}

export default AuctionLots