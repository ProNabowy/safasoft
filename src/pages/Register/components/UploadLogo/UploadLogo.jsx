import { Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledCircle, StyledCircleContainer, StyledIcon, StyledImage, StyledLabel, StyledStackContainer, StyledTypography } from './styles'

export default function UploadLogo() {
    return (
        <StyledStackContainer gap={6} direction={'column'}>

            <StyledCircleContainer>

                <StyledCircle>

                    <StyledIcon className="fa-regular fa-image"></StyledIcon>

                    <StyledLabel htmlFor='upload-logo'>

                        <i className="fa-solid fa-plus" style={{ color: 'white', fontSize: '20px' }}></i>

                    </StyledLabel>

                    {/* <StyledImage src='/vite.svg' alt='company logo' /> */}

                </StyledCircle>

            </StyledCircleContainer>

            <input type='file' hidden id='upload-logo' />

            <StyledTypography>Only images with a size lower than 500 KB are allowed</StyledTypography>

        </StyledStackContainer>
    )
}
