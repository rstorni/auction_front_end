import Navbar from "../components/Navbar"
import React from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import LotsCard from "../components/LotsCard";
import LotCreateForm from "../components/LotCreateForm";

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
            <span>{auction.start_date} - {auction.start_date}</span>
            <span>{auction.details}</span>
            <p>Auction ID: {auctionId}</p>
            <LotCreateForm />
            <h2>lots:</h2>
            <LotsCard 
                artwork_id={'a1a8fb26-3bbc-43a8-ae54-9d7af5243225'}
                low_estimate_price={0}
                high_estimate_price={100}
            />
        </>
    )
}

export default AuctionLots