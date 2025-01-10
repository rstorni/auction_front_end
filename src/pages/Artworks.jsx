import React from "react";
import Navbar from "../components/Navbar";
import ListArtworks from "../components/ListArtworks";
import ArtworkRegistrationForm from "../components/ArtworkRegistrationForm";

function Artworks() {
    const [trigger, setTrigger] = React.useState(true)

    function handleCreateArtwork() {
        setTrigger(prev => !prev)
    }

    return (
        <>
            <Navbar />
            <ArtworkRegistrationForm onArtworkCreated={handleCreateArtwork}/>
            <h1> This is the page with all of the artworks: </h1>
            <ListArtworks triggerRefresh={trigger}/>
        </>
    )
}

export default Artworks;