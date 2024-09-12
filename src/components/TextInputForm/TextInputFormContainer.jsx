import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        if(value) {
            // if we have something in value then we want to go to the play page
            navigate(`/play`, { state: { wordSelected: value } });
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
            setInputType("text")
        } else {
            setInputType("password");
        }
        console.log(inputType);
        
    }

    // useEffect(() => {
    //     console.log("component first load"); // not call on updates
    // }, []); // passing empty dependency array

    // useEffect(() => {
    //     console.log("component first load and update");
    // }); // not passing dependency array

    // useEffect(() => {
        
    //     console.log("component first load and update value changed");
    // }, [value]);

    // useEffect(() => {
    //     console.log("component first load and inputType value changed");
    // }, [inputType]);

    return (
        <>
            <TextInputForm 
                inputType={inputType}
                handleFormSubmit={handleFormSubmit} 
                handleTextInputChange={handleTextInputChange} 
                handleShowHideClick={handleShowHideClick}
            />

        </>
        
    );
}


export default TextInputFormContainer;