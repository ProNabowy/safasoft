import { Box, Stack, Typography } from '@mui/material'
import { StyledButton, StyledStackContainer } from './styles'

export default function Congrats() {
    return (
        <StyledStackContainer gap={6} direction={'column'}>

            <img src='/images/congratz-vector.webp' style={{ objectFit: 'contain' }} alt='congratz-vector' />

            <Box>

                <Typography fontWeight={500} color='#4b5a6b'>Congratz, you successfully created your account.</Typography>

                <Typography fontWeight={500} color='#586575' fontSize={'14px'} textAlign={'center'}>We just sent you a confirmation email</Typography>
                <Typography fontWeight={500} color='#586575' fontSize={'14px'} textAlign={'center'}>Please check your E-mail</Typography>

            </Box>

            <Box>

                <Typography fontWeight={500} color='#586575' fontSize={'14px'} textAlign={'center'}>Didn't receive it?</Typography>

                <Stack direction={'row'} gap={1}>


                    <Typography fontWeight={500} color='#586575' fontSize={'14px'} textAlign={'center'}>Check your Spam folder or</Typography>

                    <StyledButton>

                        <Typography
                            fontWeight={500}
                            color='danger.main'
                            fontSize={'14px'}
                            textAlign={'center'}
                            textTransform={'capitalize'}
                        >Resend Email</Typography>

                    </StyledButton>

                </Stack>

            </Box>

        </StyledStackContainer>
    )
}
