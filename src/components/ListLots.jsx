import "../css/list.css"

import React from "react"
import api from "../api"
import LotsCard from "./LotsCard"

function ListLots({ auctionID }) {

    const [ lots, setLots ] = React.useState([])

    async function fetchAuctionLots() {
        try{
            const response = await api.get("/lots", {
                params: { auction_id : auctionID}
            })
            setLots(response.data)
        } catch (error){
            console.error("error fetching lot data", error)
        }
    }

    React.useEffect(() => {
        fetchAuctionLots()
    }, [])

    const lotLists = lots.map( lot => 
        <LotsCard 
            key={lot.lot_id}
            auction_id={lot.auction_id}
            artwork_id={lot.artwork_id}
            low_estimate_price={lot.low_estimate_price}
            high_estimate_price={lot.high_estimate_price}
        />
    )
    

    return (
        <div className="listContainer">
            {lotLists}
        </div>
    )
}

export default ListLots;