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
  formData["fName"] = $("#fName").val();
  formData["lName"] = $("#lName").val();
  formData["subject"] = $("#subject").val();
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("trainer-table")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = data.number;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.fName;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.lName;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.subject;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML =
    '<button type="button" class="btn btn-primary" onClick="onEdit(this)">Edit</button>';
}

function resetForm() {
  $("#fName").val("");
  $("#lName").val("");
  $("#subject").val("");
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  $("#fName").val(selectedRow.cells[1].innerHTML);
  $("#lName").val(selectedRow.cells[2].innerHTML);
  $("#subject").val(selectedRow.cells[3].innerHTML);

  // Change title and button color
  $("#submitbtn")
    .text("Update")
    .removeClass("btn-primary")
    .addClass("btn-outline-primary");

  message();
}

function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.fName;
  selectedRow.cells[2].innerHTML = formData.lName;
  selectedRow.cells[3].innerHTML = formData.subject;
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
