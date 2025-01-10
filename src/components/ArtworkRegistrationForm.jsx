import React from "react";
import api from "../api";

function ArtworkRegistrationForm({ onArtworkCreated }) {

    async function createArtworkAPI(formData){
        try{
            const response = await api.post("/create_artwork",
                {
                    title: formData.get("title"),
                    artist: formData.get("artist"),
                    medium: formData.get("medium"),
                    details: formData.get("details"),
                    fabricated_date: formData.get("fabricationDate"),
                }
            )
            console.log("Artwork registered")

            if (onArtworkCreated) {
                onArtworkCreated()
            }
        } catch (error){
            console.error("Error Creating Artwork", error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        createArtworkAPI(formData)
        formEl.reset()
    }

    return (

        <form onSubmit={handleSubmit} method="post">

            <label htmlFor="title">Title</label>
            <input 
                id="title"
                name="title"
                required
            />

            <label htmlFor="artist">Artist</label>
            <input 
                id="artist"
                name="artist"
                required
            />

            <label htmlFor="medium">Medium</label>
            <input 
                id="medium" 
                name="medium"
                required
            />

            <label htmlFor="details">Details</label>
            <input 
                id="details"
                name="details"
                type="text"
                required
            />

            <label htmlFor="fabricationDate">Fabrication Date</label>
            <input 
                id="fabricationDate"
                name="fabricationDate"
                type="date"
                required
            />
                    
            <button>Submit</button>
        </form>
    )
}

export default ArtworkRegistrationForm;