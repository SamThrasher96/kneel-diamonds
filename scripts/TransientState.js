const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
}

export const setMetalId = (chosenMetal) => {
    transientState.metalId = parseInt(chosenMetal)
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = parseInt(chosenSize)
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = parseInt(chosenStyle)
    console.log(transientState)
}

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("orderSubmitted")
document.dispatchEvent(customEvent)
}


