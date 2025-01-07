import { Button, Stack, styled } from "@mui/material";

export const StyledStackContainer = styled(Stack)(({ theme }) => ({
    minHeight: '371px',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    padding: 0,
    textDecoration: 'underline',
    textDecorationColor: theme.palette.danger.main,
    ['&:hover']: {
        background: 'transparent',
        textDecoration: 'underline',
        textDecorationColor: theme.palette.danger.main,
    }
}));
