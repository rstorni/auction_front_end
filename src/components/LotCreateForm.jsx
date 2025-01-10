function LotCreateForm() {
    return (
        <form>
            <label htmlFor=""></label>
            <input
                id="email"
                name="email" 
                placeholder="martin@storni.com"
                type="email"
                required 
            />

            <label htmlFor="">artwork_id</label>
            <input
                id="email"
                name="email" 
                placeholder="martin@storni.com"
                type="email"
                required 
            />

            <label htmlFor="">low estimate</label>
            <input
                id="email"
                name="email" 
                placeholder="martin@storni.com"
                type="email"
                required             
            />

            <label htmlFor="">high estimate</label>
            <input
                id="email"
                name="email" 
                placeholder="martin@storni.com"
                type="email"
                required             
            />      

            <button>Submit</button>  
        </form>
    )
}

export default LotCreateForm;