
function getButtonStyling(styleType) {
    if(styleType === "primary") {
        return "bg-blue-500";
    } else if (styleType === "secondary") {
        return "bg-gray-500";
    } else if(styleType === "error") {
        return "bg-red-500";
    } else if(styleType === "success") {
        return "bg-green-500";
    } else if(styleType === "warning") {
        return "bg-yellow-500";
    }
}

export default getButtonStyling;