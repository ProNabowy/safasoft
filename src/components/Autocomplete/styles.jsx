import { Autocomplete, styled } from "@mui/material";

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  ".MuiInputBase-input": {
    paddingTop: `12px !important`,
  },
}));
