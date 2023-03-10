import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface PurchaseContextProps{
    toggleYearly: () => void,
    user: UserInfo | null,
    updateUser: (user: UserInfo) => void,
    availablePlans: Plan[],
    currentPlan: Plan | null,
    updateCurrentPlan: (plan: Plan) => void
    yearly: boolean,
    availableAddOns: AddOn[],
    currentAddOns: AddOn[],
    updateCurrentAddOns: (addOn: AddOn) => void,
    currentStep: number,
    updateCurrentStep: (modifier: number) => void
}

interface PurchaseContextProviderProps{
    children: ReactNode
}

interface UserInfo{
    name: string,
    email: string,
    phone: string,
}

interface Plan{
    thumbURL: string,
    name: string,
    monthly: number,
    yearly: number
}

interface AddOn{
    addOn: string,
    description: string,
    monthly: number,
    yearly: number
}

const PurchaseContext = createContext({} as PurchaseContextProps)

export const PurchaseContextProvider = (props: PurchaseContextProviderProps) => {
    const [ user, setUser ] = useState<UserInfo | null>(null);
    const [ availablePlans, setAvailablePlans] = useState<Plan[]>([])
    const [ currentPlan, setCurrentPlan ] = useState<Plan | null>(null);
    const [ yearly, setYearly ] = useState<boolean>(false);
    const [ availableAddOns, setAvailableAddOns] = useState<AddOn[]>([])
    const [ currentAddOns, setCurrentAddOns ] = useState<AddOn[]>([]);
    const [ currentStep, setCurrentStep ] = useState(1)

    useEffect(() => {
        fetch('/api/plans.json')
            .then(response => response.json())
            .then(data => {
                setAvailablePlans(data.plans);
                setCurrentPlan(data.plans[0])
                setAvailableAddOns(data.addOns);
            })
    }, [])

    const toggleYearly = () => {
        setYearly(prevState => !prevState)
    }

    const updateCurrentPlan = (plan: Plan) => {
        setCurrentPlan(plan);
    }

    const updateCurrentAddOns = (addOn: AddOn) => {
        if(currentAddOns.includes(addOn)){
            setCurrentAddOns(prevState => prevState.filter(currentAddOn => currentAddOn !== addOn))
        }else{
            setCurrentAddOns(prevState => [...prevState, addOn])
        }
    }

    const updateCurrentStep = (modifier: number) => {
        setCurrentStep(prevState => prevState + modifier)
    }

    const updateUser = (newUser: UserInfo) => {
        setUser(newUser)
    }

    return(
        <PurchaseContext.Provider value={{
            toggleYearly,
            user,
            updateUser,
            availablePlans,
            currentPlan,
            updateCurrentPlan,
            yearly,
            availableAddOns,
            currentAddOns,
            updateCurrentAddOns,
            currentStep,
            updateCurrentStep,
        }}>
            {props.children}
        </PurchaseContext.Provider>
    )
}

export const usePurchase = () => {
    return useContext(PurchaseContext)
}