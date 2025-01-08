import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

function PasswordInput({
  label,
  InputProps,
  inputProps,
  dir,
  ...textFieldProps
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((perv) => !perv);

  function EndAdornment() {
    return (
      <InputAdornment position="start">
        <i
          onClick={toggleShowPassword}
          className={`fa-sharp-duotone fa-solid ${
            showPassword ? "fa-eye-slash" : "fa-eye"
          }`}
          style={{
            cursor: "pointer",
            fontSize: 20,
          }}
        />
      </InputAdornment>
    );
  }

  return (
    <TextField
      label={label}
      dir={dir}
      type={showPassword ? "text" : "password"}
      variant="filled"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: <EndAdornment />,
        ...InputProps,
      }}
      {...textFieldProps}
    />
  );
}

export default PasswordInput;
