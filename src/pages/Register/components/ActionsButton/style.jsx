import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    color: theme.palette.dark.main,
}));

const ButtonVariants = {
    boxShadow: 'none',
    textTransform: 'capitalize',
    ['&:hover']: {
        boxShadow: 'none',
    }
}

export const StyledButton = styled(Button)(({ theme }) => ({
    width: '300px',
    ...ButtonVariants
}));
export const StyledBackButton = styled(Button)(({ theme }) => ({
    width: '110px',
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,
    ['&:hover']: {
        background: theme.palette.gray.light,
    },
    ...ButtonVariants,
}));