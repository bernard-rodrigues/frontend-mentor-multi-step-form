import { usePurchase } from "../../contexts/purchaseContext"
import { AddOnContainer, Step3Container } from "./style"
import check from '../../assets/images/icon-checkmark.svg'
import { StepControl2 } from "../Step2/style"

export function Step3(){
    const { yearly, availableAddOns, currentAddOns, updateCurrentAddOns, updateCurrentStep } = usePurchase()
    
    return(
        <Step3Container>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance yur gaming experience.</p>
            { availableAddOns.map(addOn => (
                <AddOnContainer 
                    key={addOn.addOn} 
                    className={currentAddOns.includes(addOn) ? "active" : ""}
                    onClick={() => updateCurrentAddOns(addOn)}
                >
                    <div className="combo">
                        <div className="checkbox">
                            <img src={check} alt="White checkmark" />
                        </div>
                        <div className="description">
                            <h2>{addOn.addOn}</h2>
                            <p>{addOn.description}</p>
                        </div>
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
            
            <StepControl2>
                <button className="previous" type="button" onClick={() => updateCurrentStep(-1)}>Go Back</button>
                <button className="next" type="button" onClick={() => updateCurrentStep(1)}>Next Step</button>
            </StepControl2>
        </Step3Container>
    )
}