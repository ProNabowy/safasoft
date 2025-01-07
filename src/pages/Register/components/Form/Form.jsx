import { Stack } from '@mui/material'
import React from 'react'
import CompanyInfo from '../CompanyInfo'
import { FormContainer, StyledTypography } from './style';
import ActionsButton from '../ActionsButton';
import { useDataGetter } from './data';

export default function Form({ activeStep, setActiveIndex }) {

    const {
        formik,
    } = useDataGetter();

    const renderActiveStep = () => {

        if (activeStep === 0) {

            return <CompanyInfo formik={formik} />

        }

    }

    return (
        <Stack width={'100%'} gap={5}>
            <StyledTypography>Tell us more about you.</StyledTypography>

            <FormContainer>

                {renderActiveStep()}

            </FormContainer>

            <ActionsButton activeStep={activeStep} setActiveIndex={setActiveIndex} />

        </Stack>
    )
}
