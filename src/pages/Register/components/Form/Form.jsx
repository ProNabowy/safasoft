import { Stack } from '@mui/material'
import React from 'react'
import CompanyInfo from '../CompanyInfo'
import { FormContainer, StyledTypography } from './style';
import ActionsButton from '../ActionsButton';
import { useDataGetter } from './data';
import Verification from '../Verification';
import UploadLogo from '../UploadLogo';


const title = {
    0: 'Tell us more about you.',
    1: 'Verify your company',
    2: 'Upload Company Logo',
}

export default function Form({ activeStep, setActiveIndex }) {

    const {
        formik,
    } = useDataGetter();

    const renderActiveStep = () => {

        if (activeStep === 0) {

            return <CompanyInfo formik={formik} />

        }

        if (activeStep === 1) {

            return <Verification formik={formik} />

        }

        if (activeStep === 2) {

            return <UploadLogo />

        }

    }

    return (
        <Stack width={'100%'} gap={5}>
            <StyledTypography>{title[activeStep]}</StyledTypography>

            <FormContainer>

                {renderActiveStep()}

            </FormContainer>

            <ActionsButton activeStep={activeStep} setActiveIndex={setActiveIndex} />

        </Stack>
    )
}
