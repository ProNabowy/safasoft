import { TextField } from '@mui/material';
import React from 'react';
import { StyledAutocomplete } from './styles';

export default function Autocomplete({ inputProps = {}, ...props }) {

    return (
        <StyledAutocomplete
            popupIcon={<i className="fa-solid fa-angle-up" style={{ fontSize: '18px', transition: '1.3s all ease-in-out' }}></i>}
            renderInput={(params) => (
                <TextField
                    {...params}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...inputProps}
                />
            )}

            {...props}
        />
    )
}
