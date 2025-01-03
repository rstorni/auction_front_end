import React from "react";
import AuctionCard from "./AuctionCard";
import api from "../api";

function ListAuctions() {
    const [auctions, setAuctions] = React.useState([])

    const fetchAuctions = (async () => {
        try{
            const response = await api.get("/auctions")
            setAuctions(response.data)
        } catch (error) {
            console.error("Error fetching auctions", error);
        }
    })

    React.useEffect(() => {
        fetchAuctions()
    }, [])

    const auctionList = auctions.map(auction => 
        <AuctionCard 
            key={auction.auction_id}
            name={auction.name}
            start_date={auction.start_date}
            end_date={auction.end_date}
            details={auction.details}
        />
    )

    return (
        <div className="auctionContainer">
            {auctionList}
        </div>
    )
}


export default ListAuctions;