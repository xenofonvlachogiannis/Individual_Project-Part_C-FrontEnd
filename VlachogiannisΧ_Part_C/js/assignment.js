var selectedRow = null;

function onSubmit() {
  let formData = readFromData();
  if (selectedRow === null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
var number = 0;
function readFromData() {
  var formData = {};
  formData["number"] = ++number;
  formData["title"] = $("#titleAssignment").val();
  formData["description"] = $("#descriptionAssignment").val();
  formData["subDate"] = $("#subDate").val();
  formData["oralMark"] = $("#oralMark").val();
  formData["totalMark"] = $("#totalMark").val();
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("assignment-table")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.number;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.title;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.description;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.subDate;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.oralMark;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.totalMark;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML =
    '<button type="button" class="btn btn-primary" onClick="onEdit(this)">Edit</button>';
}

function resetForm() {
  $("#titleAssignment").val("");
  $("#descriptionAssignment").val("");
  $("#subDate").val("");
  $("#oralMark").val("");
  $("#totalMark").val("");
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  $("#titleAssignment").val(selectedRow.cells[1].innerHTML);
  $("#descriptionAssignment").val(selectedRow.cells[2].innerHTML);
  $("#subDate").val(selectedRow.cells[3].innerHTML);
  $("#oralMark").val(selectedRow.cells[4].innerHTML);
  $("#totalMark").val(selectedRow.cells[5].innerHTML);

  // Change title and button color
  $("#submitbtn")
    .text("Update")
    .removeClass("btn-primary")
    .addClass("btn-outline-primary");

  message();
}

function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.title;
  selectedRow.cells[2].innerHTML = formData.description;
  selectedRow.cells[3].innerHTML = formData.subDate;
  selectedRow.cells[4].innerHTML = formData.oralMark;
  selectedRow.cells[5].innerHTML = formData.totalMark;
  --number;
  // Change title and button color
  $("#submitbtn")
    .text("Submit")
    .removeClass("btn-outline-primary")
    .addClass("btn-primary");
}

//Modal show and auto hide
function message() {
  $("#memberModal").modal("show");
  setTimeout(function() {
    $("#memberModal").modal("hide");
  }, 1800);
}
