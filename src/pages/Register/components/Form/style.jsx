import { Box, Stack, styled, Typography } from "@mui/material";

export const StyledRegisterContainer = styled(Stack)(({ theme }) => ({
    width: "1000px",
    maxWidth: "100%",
    gap: "50px",
    justifyContent: 'center',
    alignItems: 'center',
}));


export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: theme.spacing(5),
    textAlign: 'center'
}));

export const FormContainer = styled('form')(({ theme }) => ({
    background: 'white',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4, 5),
    border: `1px solid ${theme.palette.gray.light}`,
    width: '100%',
}));