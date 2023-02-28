import { useState } from "react"
import { usePurchase } from "../../contexts/purchaseContext"
import InputMask from 'react-input-mask';
import { validateEmail, validateName } from "../../utils/regexFunctions";
import { Step1Container, StepControl } from "./style";

export function Step1(){
    const { user, updateUser, updateCurrentStep } = usePurchase()
    
    const [ name, setName ] = useState(user ? user.name : "Stephen King");
    const [ email, setEmail ] = useState(user ? user.email : "stephenking@lorem.com");
    const [ phone, setPhone ] = useState(user ? user.phone : "(123) 456 7890");

    function validateForm(){
        if(validateEmail(email) && validateName(name) && phone.length === 14){
            updateUser({name, email, phone})
            updateCurrentStep(1)
            return true
        }
        return false
    }

    return(
        <Step1Container>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <div className="inputText">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="e.g. Stephen King" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>

            <div className="inputText">
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="e.g. stephenking@lorem.com" 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>

            <div className="inputText">
                <label htmlFor="phone">Phone Number</label>
                <InputMask 
                    mask='(999) 999 9999'
                    name="phone" 
                    placeholder="e.g. (123) 456 7890"
                    value={phone}
                    onChange={event => setPhone(event.target.value)} 
                />
            </div>

            <StepControl>
                <button className="next" type="button" onClick={() => !validateForm() ? alert("Review your form") : ""}>Next Step</button>
            </StepControl>
        </Step1Container>
    )
}