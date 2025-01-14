import React from "react";
import api from "../api";

function LotsCard(props) {

    const [artwork, setArtwork] = React.useState({})

    async function fetchArtworkDetails() {
        try{
            const artworkDetails = await api.get(`/artwork/${props.artwork_id}`)
            setArtwork(artworkDetails.data)
        } catch (error){
            console.error("error fetching artwork details", error)
        }
    }

    React.useEffect(() => {
        fetchArtworkDetails()
    }, [])

    return (
        <div className="card lot-card">
            <h1>Title: {artwork.title}</h1>
            <h2>auction ID: {props.auction_id}</h2>
            <span>Low Estimate: {props.low_estimate_price} - High Estimate{props.high_estimate_price}</span>
        </div>
    )
}

export default LotsCard;

