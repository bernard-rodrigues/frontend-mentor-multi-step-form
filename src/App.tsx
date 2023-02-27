import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { PurchaseContextProvider } from "./contexts/purchaseContext";

export function App() {
  return (
    <PurchaseContextProvider>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </PurchaseContextProvider>
  )
}
