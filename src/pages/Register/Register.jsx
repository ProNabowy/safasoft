import React, { useState } from 'react'
import { Form, Stepper } from './components'
import { StyledRegisterContainer } from './components/Form/style'

export default function Register() {

    const [activeStep, setActiveIndex] = useState(0);

    return (
        <StyledRegisterContainer direction={'column'}>

            <Stepper activeStep={activeStep} />

            <Form
                activeStep={activeStep}
                setActiveIndex={setActiveIndex}
            />

        </StyledRegisterContainer>
    )
}
