import { setSizeId } from "./TransientState.js";

const handleSizeChoice = (event) => {
if (event.target.name === "size") {
    setSizeId(parseInt(event.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json();
    document.addEventListener("change", handleSizeChoice)
    // Fill in the rest

    let sizesHTML = "";

    const sizesArray = sizes.map(
    (size) => {
    return `<div> 
        <input type='radio' name='size' value='${size.id}'/> ${size.carets}
        </div>`;
    }
)

sizesHTML += sizesArray.join("")

return sizesHTML
}

