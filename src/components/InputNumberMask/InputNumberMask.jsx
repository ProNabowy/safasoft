import React, { useState, forwardRef } from "react";
import { IMaskInput } from "react-imask";

const InputNumberMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask, ...other } = props;
  const [maskLength, setMaskLength] = useState("00000000000");

  return (
    <IMaskInput
      {...other}
      mask={maskLength}
      blocks={{
        num: {
          mask: maskLength,
        },
      }}
      inputRef={ref}
      onAccept={(value) => {
        if (value.startsWith("0")) {
          setMaskLength("00000000000");
        } else {
          setMaskLength("0000000000");
        }
        onChange({ target: { name: props.name, value } });
      }}
      overwrite
    />
  );
});

export default InputNumberMask;
