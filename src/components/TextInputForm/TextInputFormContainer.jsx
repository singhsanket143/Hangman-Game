import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
// import TextInput from "../TextInput/TextInput";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const [hintTextValue, setHintTextValue] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (value) {
      navigate(`/play`, { state: { wordSelected: value, hintGiven: hintTextValue } });
    }
  }

  function handleTextInputChange(event) {
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  const handleHintTextInputChange = (event) => {
    setHintTextValue(event.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-2xl p-6 sm:p-8 lg:p-10 bg-gray-800 rounded-lg shadow-md mt-8 mb-12">
      
      {/* Main Input */}
      <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        handleHintTextInputChange={handleHintTextInputChange}
      />
      
      {/* Hint Input */}
      
    </div>
  );
}

export default TextInputFormContainer;
