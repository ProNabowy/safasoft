import { Box, Typography } from '@mui/material'
import { StyledStackContainer, StyledTypography } from './styles'

export default function Ready() {
    return (
        <StyledStackContainer gap={6} direction={'column'}>

            <img src='/images/congratz-vector.webp' style={{ objectFit: 'contain' }} alt='congratz-vector' />

            <Box>
                <StyledTypography>We will send a message for this e-mail</StyledTypography>

                <Typography color='dark.main' fontSize={"20px"} textAlign={'center'}>example@example.com</Typography>
            </Box>

        </StyledStackContainer>
    )
}
