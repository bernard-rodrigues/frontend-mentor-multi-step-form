import { Navigator } from "./components/Navigator";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";
import { ThankYou } from "./components/ThankYou";
import { usePurchase } from "./contexts/purchaseContext";
import styled, { createGlobalStyle } from "styled-components";
import ubuntuRegular from '/fonts/Ubuntu-Regular.ttf'
import ubuntuMedium from '/fonts/Ubuntu-Medium.ttf'
import ubuntuBold from '/fonts/Ubuntu-Bold.ttf'

const Main = styled.main`
  height: 100vh;
  font-family: ${props => props.theme.ubuntu};
  font-size: ${props => props.theme.fontSize};
  position: relative;
  background-color: ${props => props.theme.magnolia};
`

const Container = styled.div`
  margin: 0 16px;
  padding: 27px 24px 18px 24px;
  height: fit-content;
  position: absolute;
  top: 100px;
  background-color: ${props => props.theme.white};
  border-radius: 10px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu400';
    src: url(${ubuntuRegular});
  }

  @font-face {
    font-family: 'Ubuntu500';
    src: url(${ubuntuMedium});
  }

  @font-face {
    font-family: 'Ubuntu700';
    src: url(${ubuntuBold});
  }
`

export function App() {
  
  const { currentStep } = usePurchase();
  
  return (
      <Main>
        <GlobalStyle />
        <Navigator />
        <Container>
          {
            currentStep === 1 ? <Step1 />
            : currentStep === 2 ? <Step2 />
            : currentStep === 3 ? <Step3 />
            : currentStep === 4 ? <Step4 />
            : <ThankYou />
          }
        </Container>
      </Main>
  )
}
