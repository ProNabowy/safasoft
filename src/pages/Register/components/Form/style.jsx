import { Box, Stack, styled, Typography } from "@mui/material";

export const StyledRegisterContainer = styled(Stack)(({ theme }) => ({
  width: "1000px",
  maxWidth: "100%",
  overflow: "hidden",
  margin: "100px 0",
  gap: "50px",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    gap: "20px",
    margin: "40px 0",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: theme.spacing(5),
  textAlign: "center",
}));

export const FormContainer = styled("form")(({ theme }) => ({
  background: "white",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4, 5),
  border: `1px solid ${theme.palette.gray.light}`,
  width: "100%",
}));
