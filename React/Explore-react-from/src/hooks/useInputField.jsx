import { useState } from "react";

const useInputField =(defaultValue)=>{
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = e => {
        setFieldValue(e.target.value);
        console.log("🚀 ~ handleFieldOnChange ~ e.target.value:", e.target.value)
    }

    return [fieldValue,handleFieldOnChange]
}
export default useInputField;