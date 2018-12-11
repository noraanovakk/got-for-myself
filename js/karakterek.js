function generateTable() {
  // getButtons();
  var table = document.querySelector('#main__table');
  var tableCells = '';
  for (var i = 0; i < gameOfThronesCharacters.length; i++) {
    var houseimg;
    var house = '';
    var alias = '';
    if (gameOfThronesCharacters[i].house) {
      houseimg = `<img src="./img/houses/${gameOfThronesCharacters[i].house}.png" alt="house">`;
    } else {
      houseimg = '';
    }
    if (gameOfThronesCharacters[i].house) {
      house = gameOfThronesCharacters[i].house;
    } else {
      house = '';
    }
    if (gameOfThronesCharacters[i].alias) {
      alias = `${gameOfThronesCharacters[i].name} \n
      alias:  ${gameOfThronesCharacters[i].alias}`;
    } else {
      alias = `${gameOfThronesCharacters[i].name}`;
    }
    tableCells +=
      `
          <tr id="tableRow">
            <td>${alias}</td>
            <td>${house} <br>
             ${houseimg}
            </td>
            <td>
            <img src="${gameOfThronesCharacters[i].picture}" alt="portrait">
            </td>
            <td>
            <textarea id="input__text${i}" readonly>${gameOfThronesCharacters[i].bio}</textarea>
            </td>
            <td>
            <input type="button" id="button__edit" onclick="changeBio(${i})" value="Edit">
            <input type="button" id="button__delete" value="Delete">
            </td>
          </tr>
      `;
  }
  table.innerHTML = tableCells;
  // console.log(typeof table);
  // console.log(document.querySelector('.input__text'));
}
generateTable();

function changeBio(index) {
  var textArea = document.querySelector('#input__text' + index);
  var newTextarea = `<textarea class="input__text2">${gameOfThronesCharacters[index].bio}</textarea>`;
  textArea[index] = newTextarea.innerHTML;
  console.log(textArea);

}

// function deletePerson(index) {
//   var tableRow = document.querySelector('#tableRow');
//   tableRow.parentNode.removeChild(tableRow[index]);
//   return tableRow;
// }

