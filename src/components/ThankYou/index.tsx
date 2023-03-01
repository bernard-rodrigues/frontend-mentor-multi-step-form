import iconThankYou from "../../assets/images/icon-thank-you.svg"
import { ThankYouContainer } from "./style"

export function ThankYou(){
    return(
        <ThankYouContainer>
            <img src={iconThankYou} alt="Thank you icon" />
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription!
                We hope you have fun using our platform.
                If you ever need support,
                please feel free to email us at support@loremgaming.com.
            </p>
        </ThankYouContainer>
    )
}