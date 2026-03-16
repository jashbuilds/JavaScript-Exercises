/* 1.Take one text input field and click on submit button test whether the first character of a string is uppercase or not. */

const stringInput = document.getElementById("testChar");
const uppercaseCharCheck = document.getElementById("uppercaseChar");
const submitStr = document.getElementById("submitStr");

submitStr.addEventListener("click", (e) => {
  e.preventDefault();
  uppercaseCharCheck.textContent =
    stringInput.value.charAt(0) === stringInput.value.charAt(0).toUpperCase()
      ? true
      : false;
});



/* 2. Take one text input field and put one button named "copy", click on button copy a string to the clipboard. */

const copyText = document.getElementById("copyChar")

document.getElementById('submitCopy').addEventListener('click', (e) => {
    e.preventDefault()
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    // document.execCommand("copy")
    document.getElementById("copyMsg").textContent = "Text Copied!"
})