import {
  Stack,
  TextField,
  Autocomplete as MuiAutocomplete,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Autocomplete, PrefixInput, InputNumberMask } from "@/components";
import { StyledAutocompleteAdornment, StyledTypography } from "./styles";
import { langs, countries } from "./helpers";
import { useTheme } from "@emotion/react";
import theme from "@/theme/theme";

export default function Verification({ formik }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const media = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChooseCountry = (e, value) => {
    formik.setFieldValue("company_country_id", value?.id); // Set the selected country ID
    setSelectedCountry(value); // Update selected country
    setSelectedCity(null); // Reset the selected city
    formik.setFieldValue("company_city_id", null); // Clear city value in Formik
  };

  const handleChooseCity = (e, value) => {
    formik.setFieldValue("company_city_id", value.id);
    setSelectedCity(value);
  };

  return (
    <Stack direction={"column"} gap={4}>
      <StyledTypography>
        Entering this information correctly will facilitate the company
        verification process
      </StyledTypography>

      <TextField
        placeholder={"Enter your company name"}
        name="company_name"
        label={"COMPANY NAME"}
        value={formik.values.company_name}
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.company_name && Boolean(formik.errors.company_name)
        }
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <StyledAutocompleteAdornment>
              <MuiAutocomplete
                popupIcon={
                  <i
                    className="fa-solid fa-angle-up"
                    style={{
                      fontSize: "18px",
                      transition: "1.3s all ease-in-out",
                    }}
                  ></i>
                }
                formik={formik}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ height: "100%" }}
                    placeholder="Lang"
                  />
                )}
                value={formik.values.lang}
                options={langs}
                sx={{ minWidth: "140px" }}
                getOptionLabel={(option) => option}
                onChange={(e, value) => {
                  formik.setFieldValue("lang", value);
                }}
              />
            </StyledAutocompleteAdornment>
          ),
        }}
      />

      <TextField
        placeholder={"Enter your address"}
        name="company_address"
        label={"ADDRESS"}
        value={formik.values.company_address}
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.company_address &&
          Boolean(formik.errors.company_address)
        }
        InputLabelProps={{
          shrink: true,
        }}
        helperText={
          formik.touched.company_address && formik.errors.company_address
        }
      />

      <TextField
        placeholder={"Enter your Business email"}
        name="company_business_email"
        label={"BUSINESS EMAIL"}
        type="email"
        value={formik.values.company_business_email}
        variant="filled"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.company_business_email &&
          Boolean(formik.errors.company_business_email)
        }
        InputLabelProps={{
          shrink: true,
        }}
        helperText={
          formik.touched.company_business_email &&
          formik.errors.company_business_email
        }
      />

      <Stack
        direction={media ? "column" : "row"}
        gap={3}
        justifyContent={"space-between"}
      >
        <Autocomplete
          formik={formik}
          inputProps={{
            placeholder: "Choose your country",
            name: "company_country_id",
            label: "COUNTRY",
            variant: "filled",
            error:
              formik.touched.company_country_id &&
              Boolean(formik.errors.company_country_id),
            helperText:
              formik.touched.company_country_id &&
              formik.errors.company_country_id,
          }}
          variant="filled"
          options={countries}
          sx={{ flex: 1 }}
          getOptionLabel={(option) => option?.name}
          onChange={handleChooseCountry}
        />

        <Autocomplete
          formik={formik}
          value={selectedCity} // Explicitly set the value
          inputProps={{
            placeholder: "Choose your city",
            name: "company_city_id",
            label: "CITY",
            variant: "filled",
            error:
              formik.touched.company_city_id &&
              Boolean(formik.errors.company_city_id),
            helperText:
              formik.touched.company_city_id && formik.errors.company_city_id,
          }}
          variant="filled"
          options={selectedCountry?.cities || []}
          sx={{ flex: 1 }}
          getOptionLabel={(option) => option?.name}
          onChange={handleChooseCity}
        />
      </Stack>

      <Stack
        direction={media ? "column" : "row"}
        gap={3}
        justifyContent={"space-between"}
      >
        <PrefixInput
          prefix="+20"
          sx={{ flex: 1 }}
          dir="ltr"
          label={"COMPANY PHONE NUMBER"}
          fullWidth
          name="company_phone"
          placeholder="Enter company phone number"
          value={formik.values.company_phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.company_phone && Boolean(formik.errors.company_phone)
          }
          helperText={
            formik.touched.company_phone && formik.errors.company_phone
          }
          InputProps={{
            inputComponent: InputNumberMask,
          }}
        />

        <PrefixInput
          prefix="+20"
          sx={{ flex: 1 }}
          dir="ltr"
          label={"COMPANY ANOTHER PHONE NUMBER"}
          fullWidth
          name="company_extra_data.phone"
          placeholder="Enter another company phone number"
          value={formik.values.company_extra_data?.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.company_extra_data?.phone &&
            Boolean(formik.errors.company_extra_data?.phone)
          }
          helperText={
            formik.touched.company_extra_data?.phone &&
            formik.errors.company_extra_data?.phone
          }
          InputProps={{
            inputComponent: InputNumberMask,
          }}
        />
      </Stack>
    </Stack>
  );
}
