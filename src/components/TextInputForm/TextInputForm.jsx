import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick, handleHintTextInputChange }) {
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full">
      
      {/* Input for Word/Phrase */}
      <div className="w-full">
        <TextInput
          type={inputType}
          label="Enter a Word or Phrase"
          placeholder="Enter a word or phrase here ..."
          onChangeHandler={handleTextInputChange}
        />

<TextInput
        inputType="text"
        label="Enter Game Hint"
        placeholder="Optional hint"
        onChangeHandler={handleHintTextInputChange}
      />
      </div>

      
      {/* Show/Hide Button */}
      <div className="w-full flex justify-center">
        <Button
          styleType="warning"
          text={inputType === "password" ? "Show" : "Hide"}
          onClickHandler={handleShowHideClick}
          className="w-32"
        />
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center">
        <Button
          type="submit"
          styleType="primary"
          text="Submit"
          className="w-32"
        />
      </div>
    </form>
  );
}

export default TextInputForm;
