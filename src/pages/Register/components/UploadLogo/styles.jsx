import { Box, Stack, styled, Typography } from "@mui/material";

export const StyledStackContainer = styled(Stack)(({ theme }) => ({
    minHeight: '241px',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const StyledCircleContainer = styled(Box)(({ theme }) => ({
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    padding: theme.spacing(3),
    border: '1px solid #eae8e9'
}));

export const StyledCircle = styled(Stack)(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: theme.palette.gray.light,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
}));

export const StyledIcon = styled('i')(({ theme }) => ({
    fontSize: '60px',
    color: theme.palette.gray.main
}));

export const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#505f6fb3',
    fontWeight: 500
}));

export const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    background: theme.palette.danger.main,
    width: "40px",
    height: "40px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer'
}));
