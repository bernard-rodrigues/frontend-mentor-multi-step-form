import { usePurchase } from "../../contexts/purchaseContext"

export function Step4(){
    const { currentPlan, yearly, currentAddOns } = usePurchase()
    
    function calculateTotal(){
        let sum = 0;
        if(currentAddOns.length > 0){
            sum = currentAddOns.reduce((prevValue, currentValue) => (
                yearly 
                    ? prevValue + currentValue.yearly 
                    : prevValue + currentValue.monthly)
                , 0)
        return  currentPlan 
            ? yearly
            ? currentPlan?.yearly! + sum : currentPlan?.monthly! + sum
            : 0
        }
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
                <h3>{"Total (per " + yearly ? "year" : "month" + ")"}</h3>
                <span>$</span>
            </div>

            <div>
                <button type="button">Go Back</button>
                <button type="button">Confirm</button>
            </div>
        </>
    )
}