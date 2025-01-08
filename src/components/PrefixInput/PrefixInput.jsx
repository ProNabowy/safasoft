import { Typography } from "@mui/material";
import { StyledContainer, StyledPrefixInput } from "./style";

function StartAdornment({ prefix }) {
  return (
    <StyledContainer>
      <Typography variant="textMd" color="gray.darkest">
        {prefix}
      </Typography>
    </StyledContainer>
  );
}

function PrefixInput({
  formik,
  prefix,
  label,
  InputProps,
  inputProps,
  dir,
  ...textFieldProps
}) {
  return (
    <StyledPrefixInput
      label={label}
      dir={dir}
      variant="filled"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        startAdornment: <StartAdornment prefix={prefix} />,
        ...InputProps,
      }}
      {...textFieldProps}
    />
  );
}

export default PrefixInput;
