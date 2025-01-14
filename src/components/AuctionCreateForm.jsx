import "../css/form-containter.css"

import React from "react"
import api from "../api"


function AuctionCreateForm({ onAuctionCreated }){

    async function createAuctionAPI(formData) {
        try{
            const response = await api.post("/create_auction", 
                { 
                    name: formData.get("auctionName"),
                    details: formData.get("details"),
                    start_date: formData.get("startDate"),
                    end_date: formData.get("endDate")
                }
            )
            console.log('Auction Created')

            if (onAuctionCreated) {
                onAuctionCreated();
            }
        } catch (error) {
            console.error("Error Creating Auction", error);
        }
    }

    async function handleSubmit(event){
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        createAuctionAPI(formData)
        formEl.reset()
    }

    return (
        <form onSubmit={handleSubmit} method="post" className="form-container">
            <h1>Add an auction</h1>
            <label htmlFor="auctionName">Auction Name:</label>
            <input 
                id ="auctionName"
                name="auctionName"
                required
            />

            <label htmlFor="startDate">Start Date:</label>
            <input 
                id ="startDate"
                name="startDate"
                type="date" 
                required
            />

            <label htmlFor="endDate">End Date:</label>
            <input 
                id ="endDate"
                name="endDate"
                type="date" 
                required
            />

            <label htmlFor="details">Details:</label>
            <input 
                id="details"
                name="details"
                type="text" 
                required
            />

            <button>Add Auction</button>
        </form>
    )
}

export default AuctionCreateForm