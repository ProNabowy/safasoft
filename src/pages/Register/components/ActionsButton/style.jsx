import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  color: theme.palette.dark.main,
}));

const ButtonVariants = {
  boxShadow: "none",
  textTransform: "capitalize",
  ["&:hover"]: {
    boxShadow: "none",
  },
};

export const StyledButton = styled(LoadingButton)(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
  ...ButtonVariants,
}));
export const StyledBackButton = styled(Button)(({ theme }) => ({
  width: "110px",
  color: theme.palette.gray.main,
  background: theme.palette.gray.light,
  ["&:hover"]: {
    background: theme.palette.gray.light,
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
  ...ButtonVariants,
}));
