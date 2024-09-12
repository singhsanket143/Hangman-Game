import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import TextInput from "../TextInput/TextInput";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const [hintTextValue, setHintTextValue] = useState("");

  const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", value);
    if (value) {
      // if we have something in value then we want to go to the play page
      navigate(`/play`, { state: { wordSelected: value, hintGiven:hintTextValue } });
    }
  }

  function handleTextInputChange(event) {
    console.log("Text input changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Show/Hide button clicked");
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    console.log(inputType);
  }

  const handleHintTextInputChange = (event) => {
    console.log(hintTextValue)
    setHintTextValue(event.target.value);
  };

  return (
    <div className="flex gap-5 m-2">
      <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
      />

      <TextInput
        inputType={"text"}
        label={"Enter Your Game Hint here"}
        placeholder="game hint"
        onChangeHandler={handleHintTextInputChange}
      />
    </div>
  );
}

export default TextInputFormContainer;
