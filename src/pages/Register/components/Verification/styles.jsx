import { InputAdornment, styled, Typography } from "@mui/material";

export const StyledAutocompleteAdornment = styled(InputAdornment)(({ theme }) => ({
    ['& .MuiInputBase-root fieldset']: {
        border: 'none !important',
    },
    ['& .MuiFormControl-root']: {
        border: 'none !important',
    },

}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#686d71',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3.5),
    fontSize: '14px',
    fontWeight: 500
}));