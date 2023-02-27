import { useEffect, useState } from "react"
import { usePurchase } from "../../contexts/purchaseContext";
import { PlanCard } from "./style";

interface Plan{
    thumbURL: string,
    name: string,
    monthly: number,
    yearly: number
}

export function Step2(){
    const { yearly, toggleYearly, availablePlans, currentPlan, updateCurrentPlan } = usePurchase()
    
    return(
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div>
                { availablePlans.map(plan => (
                    <PlanCard 
                        key={plan.name} 
                        className={ currentPlan?.name === plan.name ? "active" : ""}
                        onClick={() => updateCurrentPlan(plan)}
                    >
                        <img src={plan.thumbURL} alt={plan.name + "'s image thumb"} />
                        <h2>{plan.name}</h2>
                        <p>${ yearly ? plan.yearly + "/yr" : plan.monthly + "/mo"}</p>
                        { yearly 
                            ? <span>2 months free</span>
                            : <></>
                        }
                    </PlanCard>
                ))}
            </div>
            <div>
                <span>Monthly</span>
                <input type="checkbox" onClick={toggleYearly} /> 
                
                <span>Yearly</span>
            </div>
            
            <div>
                <button type="button">Go Back</button>
                <button type="button">Next Step</button>
            </div>
        </>
    )
}