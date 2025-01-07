import { Box, styled, TextField } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(19.5),
  position: "absolute",
  left: 0,
  top: 0,
  borderTopLeftRadius: theme.spacing(2),
  borderBottomLeftRadius: theme.spacing(2),
  height: "100%",
  padding: theme.spacing(2.5, 1.5),
  borderRight: `1px solid ${theme.palette.gray.light}`,
}));


export const StyledPrefixInput = styled(TextField)(({ theme, dir, prefix }) => ({
  position: 'relative',
  // textAlign: 'initial'
  "& .MuiFormLabel-root": {
    left: dir === 'ltr' ? theme.spacing(19.5) : 'initial',
  },
  "& .MuiInputBase-input": {
    position: 'relative',
    left: dir === 'ltr' ? theme.spacing(19.5) : 'initial',
  },
}));