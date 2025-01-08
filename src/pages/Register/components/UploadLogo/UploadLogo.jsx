import React from "react";
import {
  StyledCircle,
  StyledCircleContainer,
  StyledIcon,
  StyledImage,
  StyledLabel,
  StyledStackContainer,
  StyledTypography,
} from "./styles";
import { checkFileSize } from "@/assets/js/utils";
import { toast } from "react-toastify";
export default function UploadLogo({ formik }) {
  const notify = () =>
    toast("The file is too large. Please upload a file smaller than 500KB", {
      position: "bottom-right",
    });

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (checkFileSize(file, 500)) formik.setFieldValue("company_avatar", file);
    else notify();
  };

  return (
    <StyledStackContainer gap={6} direction={"column"}>
      <StyledCircleContainer>
        <StyledCircle>
          {!formik.values?.company_avatar && (
            <StyledIcon className="fa-regular fa-image"></StyledIcon>
          )}

          <StyledLabel htmlFor="upload-logo">
            <i
              className="fa-solid fa-plus"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </StyledLabel>

          {formik.values?.company_avatar && (
            <StyledImage
              src={URL.createObjectURL(formik.values?.company_avatar || {})}
            />
          )}
        </StyledCircle>
      </StyledCircleContainer>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        maxLength={1}
        hidden
        id="upload-logo"
      />

      <StyledTypography>
        Only images with a size lower than 500 KB are allowed
      </StyledTypography>
    </StyledStackContainer>
  );
}
