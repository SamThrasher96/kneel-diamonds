import { setMetalId } from "./TransientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalId(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", handleMetalChoice)

    let metalHTML = ""

    for (const metal of metals){
    metalHTML += `<div>
        <input type='radio' name='metal' value='${metal.id}'/> ${metal.metal}
        </div>`
    }
    return metalHTML
}


