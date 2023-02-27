import { usePurchase } from "../../contexts/purchaseContext"
import { AddOnContainer } from "./style"

export function Step3(){
    const { yearly, availableAddOns, currentAddOns, updateCurrentAddOns } = usePurchase()
    
    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance yur gaming experience.</p>
            { availableAddOns.map(addOn => (
                <AddOnContainer 
                    key={addOn.addOn} 
                    className={currentAddOns.includes(addOn) ? "active" : ""}
                    onClick={() => updateCurrentAddOns(addOn)}
                >
                    <span>Checkbox</span>
                    <div>
                        <h2>{addOn.addOn}</h2>
                        <p>{addOn.description}</p>
                    </div>
                    <span>
                        +$
                        { yearly 
                            ? String(addOn.yearly) + "/yr"
                            : String(addOn.monthly) + "/mo"
                        }
                    </span>
                </AddOnContainer>
            ))}
            
            <div>
                <button type="button">Go Back</button>
                <button type="button">Next Step</button>
            </div>
        </>
    )
}