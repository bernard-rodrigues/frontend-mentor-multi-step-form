import { usePurchase } from "../../contexts/purchaseContext";
import { NavBar } from "./style";

const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

export function Navigator(){
    const { currentStep } = usePurchase()
    
    return (
        <NavBar>
            { steps.map((step, index) => (
                <div key={step}>
                    <div className={(currentStep === index + 1 ? "active " : "") + "stepNumber"}>{index + 1}</div>
                    <div className="stepDescription">
                        <span>STEP {index + 1}</span>
                        <span>{step}</span>
                    </div>
                </div>
            ))}
        </NavBar>
    )
}