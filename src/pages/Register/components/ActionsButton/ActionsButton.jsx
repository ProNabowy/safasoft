import { Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { StyledBackButton, StyledButton, StyledLink } from "./style";
import { RegisterContext } from "../../context/RegisterContext";
import { useTheme } from "@emotion/react";
import theme from "@/theme/theme";

const BackToLoginButton = ({ activeStep = 0 }) => {
  return (
    activeStep === 0 && (
      <StyledLink to={""}>
        <i
          className="fa-solid fa-triangle"
          style={{ fontSize: "12px", rotate: "270deg" }}
        ></i>

        <Typography fontSize={"14px"}>Back to login</Typography>
      </StyledLink>
    )
  );
};

const validateSteps = (activeStep, formik) => {
  if (activeStep === 0) {
    const keys = [
      "user_full_name",
      "user_email",
      "user_phone",
      "user_position",
      "user_password",
      "user_password_confirmation",
    ];

    for (const key of keys) {
      if (formik.errors[key]) return true;
    }

    return false;
  }

  if (activeStep === 1) {
    const keys = [
      "company_name",
      "company_address",
      "company_business_email",
      "company_country_id",
      "company_city_id",
      "company_phone",
    ];

    for (const key of keys) {
      if (formik.errors[key]) return true;
    }

    return false;
  }

  if (activeStep === 2) {
    const keys = ["company_avatar"];

    for (const key of keys) {
      if (formik.errors[key]) return true;
    }

    return false;
  }
};

export default function ActionsButton({ formik }) {
  const { isLoading, activeStep, setActiveIndex } = useContext(RegisterContext);

  const media = useMediaQuery(theme.breakpoints.down("sm"));
  const handlePervStep = () => {
    if (activeStep === 0) return;

    setActiveIndex((perv) => perv - 1);
  };
  const handleNextStep = () => {
    if (activeStep === 3) return formik.handleSubmit();

    setActiveIndex((perv) => perv + 1);
  };

  return (
    <Stack
      flexDirection={media ? "column" : "row"}
      justifyContent={activeStep === 0 ? "space-between" : "end"}
      alignItems={media ? "center" : "initial"}
      flexWrap={"wrap"}
    >
      <BackToLoginButton activeStep={activeStep} />

      <Stack
        direction={media ? "column-reverse" : "row"}
        alignItems={media ? "center" : "initial"}
        gap={3}
      >
        {activeStep !== 0 && (
          <StyledBackButton onClick={handlePervStep} variant="contained">
            Back
          </StyledBackButton>
        )}

        <StyledButton
          loading={isLoading}
          disabled={validateSteps(activeStep, formik)}
          onClick={handleNextStep}
          variant="contained"
        >
          Next
        </StyledButton>
      </Stack>
    </Stack>
  );
}
