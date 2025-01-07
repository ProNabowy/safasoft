import { InputAdornment, styled } from "@mui/material";

export const StyledAutocompleteAdornment = styled(InputAdornment)(({ theme }) => ({
    ['& .MuiInputBase-root fieldset']: {
        border: 'none !important',
    },
    ['& .MuiFormControl-root']: {
        border: 'none !important',
    },

}))