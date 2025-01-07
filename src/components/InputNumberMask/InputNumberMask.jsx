import React, { useState, forwardRef } from "react";
import { IMaskInput } from "react-imask";

const InputNumberMask = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, mask, ...other } = props;
    const [maskLength, setMaskLength] = useState("00000000000");

    return (
        <IMaskInput
            {...other}
            mask={maskLength} // Set the mask
            blocks={{
                num: {
                    mask: maskLength, // Dynamically adjust mask length
                },
            }}
            inputRef={ref}
            onAccept={(value) => {
                if (value.startsWith("0")) {
                    setMaskLength("00000000000"); // 11 digits
                } else {
                    setMaskLength("0000000000"); // 10 digits
                }
                onChange({ target: { name: props.name, value } });
            }}
            overwrite
        />
    );
});

export default InputNumberMask