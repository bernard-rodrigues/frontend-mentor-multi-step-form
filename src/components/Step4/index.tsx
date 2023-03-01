import { usePurchase } from "../../contexts/purchaseContext"
import { StepControl2 } from "../Step2/style"
import { Confirm, Step4Container } from "./style"

export function Step4(){
    const { currentPlan, yearly, toggleYearly, currentAddOns, updateCurrentStep } = usePurchase()
    
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
        <Step4Container>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div id="summary">
                <div className="summaryHeader">
                    <div>
                        <h2>
                            {currentPlan?.name} {yearly ? "(Yearly)" : "(Montly)"}
                        </h2>
                        <p id="changer" onClick={toggleYearly}>Change</p>
                    </div>
                    <div>${yearly 
                        ? String(currentPlan?.yearly) + "/yr" 
                        : String(currentPlan?.monthly) + "/mo"}
                    </div>
                </div>

                <hr />
                { currentAddOns.map(addOn => (
                    <div key={addOn.addOn} className="addOn">
                        <h3>{addOn.addOn}</h3>
                        <span>+${ yearly ? String(addOn.yearly) + "/yr" : String(addOn.monthly) + "/mo"}</span>
                    </div>
                ))}
            </div>
            <div id="total">
                <h3>{"Total (per " + (yearly ? "year" : "month") + ")"}</h3>
                <p>${calculateTotal()}</p>
            </div>

            <Confirm>
                <button className="previous" type="button" onClick={() => updateCurrentStep(-1)}>Go Back</button>
                <button className="next" type="button" onClick={() => updateCurrentStep(1)}>Confirm</button>
            </Confirm>
        </Step4Container>
    )
}