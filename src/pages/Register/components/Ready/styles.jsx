import { Stack, styled, Typography } from "@mui/material";

export const StyledStackContainer = styled(Stack)(({ theme }) => ({
    minHeight: '270px',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 500,
    color: theme.palette.danger.main,
    marginTop: theme.spacing(6),
}));