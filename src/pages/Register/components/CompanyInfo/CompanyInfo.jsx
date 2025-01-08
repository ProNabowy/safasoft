import { Stack, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import {
  Autocomplete,
  InputNumberMask,
  PrefixInput,
  PasswordInput,
} from "@/components";
import theme from "@/theme/theme";

const countries = [
  { name: "Egypt", code: "+20", id: 1 },
  { name: "Saudi Arabia", code: "+966", id: 2 },
  { name: "Kuwait", code: "+965", id: 3 },
];

export default function CompanyInfo({ formik }) {
  const media = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack direction={"column"} gap={4}>
      <TextField
        placeholder={"Enter full name"}
        name="user_full_name"
        label={"FULL NAME"}
        value={formik.values.user_full_name}
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        placeholder={"Enter your business email"}
        type="email"
        name="user_email"
        label={"BUSINESS EMAIL"}
        value={formik.values.user_email}
        variant="filled"
        onChange={formik.handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Stack
        direction={media ? "column" : "row"}
        gap={3}
        justifyContent={"space-between"}
      >
        <Autocomplete
          inputProps={{
            placeholder: "Choose your country",
            name: "user_position",
            label: "COUNTRY",
            value: formik.values.user_position,
            variant: "filled",
          }}
          sx={{ flex: 1 }}
          value={formik.values.user_position}
          variant="filled"
          options={countries}
          getOptionLabel={(option) => option?.name}
          onChange={(e, value) => {
            formik.setFieldValue("user_position", value);
          }}
        />

        <PrefixInput
          prefix="+20"
          sx={{ flex: 1 }}
          formik={formik}
          dir="ltr"
          label={"PHONE NUMBER"}
          fullWidth
          name="user_phone"
          placeholder="Enter your phone number"
          value={formik.values.user_phone}
          onChange={formik.handleChange}
          InputProps={{
            inputComponent: InputNumberMask,
          }}
        />
      </Stack>

      <PasswordInput
        sx={{ flex: 1 }}
        formik={formik}
        dir="ltr"
        label={"PASSWORD"}
        fullWidth
        name="user_password"
        placeholder="choose a password"
        value={formik.values.user_password}
        onChange={formik.handleChange}
      />

      <PasswordInput
        sx={{ flex: 1 }}
        dir="ltr"
        label={"REPEAT PASSWORD"}
        fullWidth
        name="user_password_confirmation"
        placeholder="Repeat your password"
        value={formik.values.user_password_confirmation}
        onChange={formik.handleChange}
      />
    </Stack>
  );
}
