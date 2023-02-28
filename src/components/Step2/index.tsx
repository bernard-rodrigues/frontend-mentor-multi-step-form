import { usePurchase } from "../../contexts/purchaseContext";
import { PlanCard, Step2Container, StepControl2 } from "./style";
import * as Switch from '@radix-ui/react-switch';

interface Plan{
    thumbURL: string,
    name: string,
    monthly: number,
    yearly: number
}

export function Step2(){
    const { yearly, toggleYearly, availablePlans, currentPlan, updateCurrentPlan, updateCurrentStep } = usePurchase()
    
    return(
        <Step2Container>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div id="plans">
                { availablePlans.map(plan => (
                    <PlanCard 
                        key={plan.name} 
                        className={ currentPlan?.name === plan.name ? "active" : ""}
                        onClick={() => updateCurrentPlan(plan)}
                    >
                        <img src={plan.thumbURL} alt={plan.name + "'s image thumb"} />
                        <div>
                            <h2>{plan.name}</h2>
                            <p>${ yearly ? plan.yearly + "/yr" : plan.monthly + "/mo"}</p>
                            { yearly 
                                ? <span className="free">2 months free</span>
                                : <></>
                            }
                        </div>
                    </PlanCard>
                ))}
            </div>
            <div id="monthly-yearly">
                <span className={yearly ? "" : "active"}>Monthly</span>
                
                <Switch.Root className="SwitchRoot" id="airplane-mode" onClick={toggleYearly} checked={yearly}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
                
                <span className={yearly ? "active" : ""}>Yearly</span>
            </div>
            
            <StepControl2>
                <button className="previous" type="button" onClick={() => updateCurrentStep(-1)}>Go Back</button>
                <button className="next" type="button" onClick={() => updateCurrentStep(1)}>Next Step</button>
            </StepControl2>
        </Step2Container>
    )
}