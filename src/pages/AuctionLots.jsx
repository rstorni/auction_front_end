import Navbar from "../components/Navbar"
import React from "react";
import api from "../api";
import { useParams } from "react-router-dom";

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
        <>
            <Navbar />
            <h1>{auction.name}</h1>
            <p>Auction ID: {auctionId}</p>
        </>
    )
}

export default AuctionLots