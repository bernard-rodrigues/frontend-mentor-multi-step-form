import { usePurchase } from "../../contexts/purchaseContext"
import { StepControl2 } from "../Step2/style"

export function Step4(){
    const { currentPlan, yearly, currentAddOns, updateCurrentStep } = usePurchase()
    
    function calculateTotal(){
        if(currentPlan && currentAddOns.length > 0){
            const sum = currentAddOns.reduce((prevValue, currentValue) => (
                yearly 
                    ? prevValue + currentValue.yearly 
                    : prevValue + currentValue.monthly)
                , 0)
            return yearly ? sum + currentPlan.yearly : sum + currentPlan.monthly
        }
        if(currentPlan){
            return yearly ? currentPlan.yearly : currentPlan.monthly
        }
        return 0
    }
    
    return(
        <>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div>
                <div>
                    <div>
                        <h2>
                            <span>{currentPlan?.name}</span> <span>{yearly ? "(Yearly)" : "(Montly)"}</span>
                        </h2>
                        <span>Change</span>
                    </div>
                    <span>${yearly 
                        ? String(currentPlan?.yearly) + "/yr" 
                        : String(currentPlan?.monthly) + "/mo"}</span>
                </div>
                <hr />
                { currentAddOns.map(addOn => (
                    <div key={addOn.addOn}>
                        <h3>{addOn.addOn}</h3>
                        <span>+${ yearly ? String(addOn.yearly) + "/yr" : String(addOn.monthly) + "/mo"}</span>
                    </div>
                ))}
            </div>
            <div>
                <h3>{"Total (per " + (yearly ? "year" : "month") + ")"}</h3>
                <span>${calculateTotal()}</span>
            </div>

            <StepControl2>
                <button className="previous" type="button" onClick={() => updateCurrentStep(-1)}>Go Back</button>
                <button className="next" type="button" onClick={() => updateCurrentStep(1)}>Confirm</button>
            </StepControl2>
        </>
    )
}