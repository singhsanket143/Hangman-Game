import { imageData } from "./HangManUtility";


function HangMan( { step }) {
    const images = imageData;

    return (
        <div className='w-[300px] h-[300px]'> 
            <img 
                src={step >= images.length ? images[images.length - 1] : images[step]}
            />
        </div>
    )
}

export default HangMan;