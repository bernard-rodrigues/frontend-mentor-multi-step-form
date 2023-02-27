import { useState } from "react"
import { usePurchase } from "../../contexts/purchaseContext"

export function Step1(){
    const { user } = usePurchase()
    
    const [ name, setName ] = useState(user ? user.name : "")
    const [ email, setEmail ] = useState(user ? user.email : "")
    const [ phone, setPhone ] = useState(user ? user.phone : "")
    
    return(
        <>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name="name" 
                placeholder="e.g. Stephen King" 
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                name="email" 
                placeholder="e.g. stephenking@lorem.com" 
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="phone">Phone Number</label>
            <input 
                type="text" 
                name="phone" 
                placeholder="e.g. +1 234 567 890"
                value={phone}
                onChange={event => setPhone(event.target.value)} 
            />

            <button type="button">Next Step</button>
        </>
    )
}