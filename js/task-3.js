const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimName = inputEl.value.trim();
  if (trimName === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimName;
  }
});
