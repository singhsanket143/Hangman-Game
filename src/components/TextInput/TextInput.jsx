function TextInput({ type = "text", label, placeholder = "Enter your input here", onChangeHandler }) {

    return (
        <label>
            <span className="text-white">{label}</span>
            <input 
                type={type}
                className="px-4 py-2 border border-gray-500 rounded-md w-full mt-2"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            
        </label>
        
    )
}

export default TextInput;