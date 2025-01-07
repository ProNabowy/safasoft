import { Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledBackButton, StyledButton, StyledLink } from './style'

const BackToLoginButton = ({ activeStep = 0 }) => {
    return (
        activeStep === 0 &&
        <StyledLink to={''}>

            <i className="fa-solid fa-triangle" style={{ fontSize: '12px', rotate: "270deg" }}></i>

            <Typography fontSize={'14px'}>Back to login</Typography>

        </StyledLink>
    )
}

export default function ActionsButton({ activeStep = 0, setActiveIndex = () => { } }) {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={activeStep === 0 ? 'space-between' : 'end'}>

            <BackToLoginButton activeStep={activeStep} />

            <Stack direction={'row'} gap={3}>

                {activeStep !== 0 && <StyledBackButton onClick={() => setActiveIndex(perv => perv - 1)} variant="contained">Back</StyledBackButton>}
                <StyledButton onClick={() => setActiveIndex(perv => perv + 1)} variant="contained">Next</StyledButton>

            </Stack>

        </Stack>
    )
}
