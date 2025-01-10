import React from "react";
import AuctionCard from "./AuctionCard";
import api from "../api";

function ListAuctions({ refreshTrigger, numItems }) {
    const [auctions, setAuctions] = React.useState([])

    const fetchAuctions = (async () => {
        try{
            const response = await api.get("/auctions", {
                params: {num_items: numItems}
            })
            setAuctions(response.data)
        } catch (error) {
            console.error("Error fetching auctions", error);
        }
    })

    React.useEffect(() => {
        fetchAuctions()
    }, [refreshTrigger])

    const auctionList = auctions.map(auction => 
        <AuctionCard 
            key={auction.auction_id}
            auction_id={auction.auction_id}
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