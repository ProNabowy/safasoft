import { Stack } from "@mui/material";
import React, { useContext } from "react";
import CompanyInfo from "../CompanyInfo";
import { FormContainer, StyledTypography } from "./style";
import ActionsButton from "../ActionsButton";
import { useDataGetter } from "./data";
import Verification from "../Verification";
import UploadLogo from "../UploadLogo";
import Ready from "../Ready/Ready";
import Congrats from "../Congrats";
import { RegisterContext } from "../../context/RegisterContext";

const title = {
  0: "Tell us more about you.",
  1: "Verify your company",
  2: "Upload Company Logo",
};

export default function Form({}) {
  const { formik } = useDataGetter();
  const { activeStep, setActiveIndex } = useContext(RegisterContext);

  const renderActiveStep = () => {
    if (activeStep === 0) {
      return <CompanyInfo formik={formik} />;
    }

    if (activeStep === 1) {
      return <Verification formik={formik} />;
    }

    if (activeStep === 2) {
      return <UploadLogo formik={formik} />;
    }

    if (activeStep === 3) {
      return <Ready />;
    }

    if (activeStep === 4) {
      return <Congrats />;
    }
  };

  return (
    <Stack width={"100%"} gap={5}>
      <StyledTypography>{title[activeStep]}</StyledTypography>

      <FormContainer onSubmit={formik.handleSubmit}>
        {renderActiveStep()}
      </FormContainer>

      {activeStep < 4 && (
        <ActionsButton
          activeStep={activeStep}
          setActiveIndex={setActiveIndex}
          formik={formik}
        />
      )}
    </Stack>
  );
}
