import { setStyleId } from "./TransientState.js";


const handleStyleChoices = (event) => {
    if (event.target.name === "style") {
        setStyleId(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();
  document.addEventListener("change", handleStyleChoices)
  // Fill in the rest
  let styleHTML = "";

  for (const style of styles) {
    styleHTML += `<div>
        <input type='radio' name='style' value='${style.id}'/> ${style.style}
        </div>`;
  }

  return styleHTML;
};
