import { Form, Stepper } from "./components";
import { StyledRegisterContainer } from "./components/Form/style";
import { RegisterProvider } from "./context/RegisterContext";

export default function Register() {
  return (
    <RegisterProvider>
      <StyledRegisterContainer direction={"column"}>
        <Stepper />
        <Form />
      </StyledRegisterContainer>
    </RegisterProvider>
  );
}
