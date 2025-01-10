import React from "react";
import Navbar from "../components/Navbar";
import ListAuctions from "../components/ListAuctions";
import AuctionCreateForm from "../components/AuctionCreateForm";

function Auctions() {
    const [trigger, setTrigger] = React.useState(true)

    function handleAuctionCreated() {
        setTrigger(prev => !prev)
    }

    return (
        <>
            <Navbar />
            <AuctionCreateForm onAuctionCreated={handleAuctionCreated}/>
            <h1> All Auctions: </h1>
            <ListAuctions refreshTrigger={trigger}/>
        </>
    )
}

export default Auctions;