import React from "react";
import AuctionCard from "./AuctionCard";

function ListThreeAuctions() {
    const [auctions, setAuctions] = React.useState([])

    React.useEffect(() => {
        fetch("http://127.0.0.1:8000/auctions")
        .then(res => res.json())
        .then(data => setAuctions(data))
    }, [])

    const top3Auctions = auctions.slice(0,3)

    const auctionList = top3Auctions.map(auction => 
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


export default ListThreeAuctions;