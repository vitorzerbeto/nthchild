(function() {
  const inputColumnNumber = document.getElementById("column-number");
  const inputNthSelector = document.getElementById("nth-selector");

  inputColumnNumber.addEventListener("keyup", () => {
    const columnNumber = inputColumnNumber.value;
    const columnsWrap = document.getElementById("columns");

    columnsWrap.style["grid-template-columns"] = `repeat(${columnNumber}, 1fr)`;
  });

  inputNthSelector.addEventListener("keyup", () => {
    const nthSelector = inputNthSelector.value;
    const columnsWrap = document.getElementById("columns");

    const nthPreSelectorChecked = document.querySelector(
      "form input[type=radio]:checked"
    ).value;

    const htmlCustomCSS = document.getElementById("custom");

    htmlCustomCSS.innerHTML = `ul li${nthPreSelectorChecked}(${nthSelector}) { background :#3D3D3D }`;
    //Result:
    // ul li:nth-child(2n + 2) { background :#3D3D3D }
    //or
    // ul li:nth-last-child(odd) { background :#3D3D3D }
  });
})();
