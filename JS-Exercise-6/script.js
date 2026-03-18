/* 1.Take one text input field and click on submit button test whether the first character of a string is uppercase or not. */

const stringInput = document.getElementById("testChar");
const uppercaseCharCheck = document.getElementById("uppercaseChar");
const submitStr = document.getElementById("submitStr");

submitStr.addEventListener("click", (e) => {
  e.preventDefault();

  const firstChar = stringInput.value[0];
  uppercaseCharCheck.textContent =
    firstChar === firstChar.toUpperCase() ? true : false;
});

const validateCaseForm = () =>
  (submitStr.disabled = stringInput.value.trim() === "" ? true : false);
stringInput.addEventListener("input", validateCaseForm);

/* 2. Take one text input field and put one button named "copy", click on button copy a string to the clipboard. */

const copyCharInput = document.getElementById("copyChar");
const copyBtn = document.getElementById("submitCopy");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    copyCharInput.select();
    navigator.clipboard.writeText(copyCharInput.value);
  } catch (error) {
    copyMsg.textContent = "Error!";
  }
  copyMsg.textContent = `String "${copyCharInput.value}" is copied to Clipboard!`;
});

const validateCopyForm = () =>
  (copyBtn.disabled = copyCharInput.value.trim() === "" ? true : false);
copyCharInput.addEventListener("input", validateCopyForm);

/* 3. Write a JavaScript program to find all the index positions of a given word within a given string.

( "The quick brown fox jumps over the lazy dog.", "the") -> [31]
( "the quick brown fox jumps over the lazy dog.", "the") -> [0, 31]
( "the quick brown fox jumps over the lazy dog.", "cat") -> [] */

const strObj = [
  {
    text: "The quick brown fox jumps over the lazy dog.",
    word: "the",
  },
  {
    text: "the quick brown fox jumps over the lazy dog.",
    word: "the",
  },
  {
    text: "the quick brown fox jumps over the lazy dog.",
    word: "cat",
  },
];

const findIndex = (obj, strIndexElement) => {
  const indexes = [];

  const textToSearch = obj.text;
  const wordToFind = obj.word;

  const matches = textToSearch.matchAll(new RegExp(wordToFind, "g"));

  for (const match of matches) {
    indexes.push(match.index);
  }

  strIndexElement.textContent = JSON.stringify(indexes);
};

const indexFirstStr = document.getElementById("indexFirstStr");
const indexSecondStr = document.getElementById("indexSecondStr");
const indexThirdStr = document.getElementById("indexThirdStr");

findIndex(strObj[0], indexFirstStr);
findIndex(strObj[1], indexSecondStr);
findIndex(strObj[2], indexThirdStr);

/* 4. Take input for file upload and display the name of uploaded file. */

const fileNameField = document.getElementById("fileName");
const fileInput = document.getElementById("fileUpload");

fileInput.addEventListener("change", () => {
  fileNameField.textContent = fileInput.files[0].name;
});

/* 5. take one input field and take number in percentage between 0-100%, based on percentage create progress bar that updates its width. 

      for eg : entered 75% then progress bar width filled 75% with green colour.
 */

const percentageInput = document.getElementById("inputNum");
const progressBar = document.getElementById("progressBar");
const progressVal = document.getElementById("progressVal");

percentageInput.addEventListener("input", () => {
  const value = Number(percentageInput.value);

  progressBar.style.width = value < 0 || value > 100 ? 0 : value + "%";
  progressVal.textContent = value < 0 || value > 100 ? "0%" : value + "%";
});
