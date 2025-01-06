import React from 'react'
import { Stepper } from './components'
import { StyledRegisterContainer } from './style'

export default function Register() {
    return (
        <StyledRegisterContainer direction={'row'} padding={0}>
            <Stepper />
        </StyledRegisterContainer>
    )
}
