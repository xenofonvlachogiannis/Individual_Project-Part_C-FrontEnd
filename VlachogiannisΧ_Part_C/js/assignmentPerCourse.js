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
  formData["course"] = $("#courseSelect").val();
  formData["title"] = $("#titleAssignment").val();
  formData["description"] = $("#descriptionAssignment").val();
  formData["subDate"] = $("#subDate").val();
  formData["oralMark"] = $("#oralMark").val();
  formData["totalMark"] = $("#totalMark").val();
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("assignmentPerCourse-table")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = data.number;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.course;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.title;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.description;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.subDate;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = data.oralMark;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = data.totalMark;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML =
    '<button type="button" class="btn btn-primary" onClick="onEdit(this)">Edit</button>';
}

function resetForm() {
  $("#courseSelect").val("choose");
  $("#titleAssignment").val("");
  $("#descriptionAssignment").val("");
  $("#subDate").val("");
  $("#oralMark").val("");
  $("#totalMark").val("");
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  $("#courseSelect").val(selectedRow.cells[1].innerHTML);
  $("#titleAssignment").val(selectedRow.cells[2].innerHTML);
  $("#descriptionAssignment").val(selectedRow.cells[3].innerHTML);
  $("#subDate").val(selectedRow.cells[4].innerHTML);
  $("#oralMark").val(selectedRow.cells[5].innerHTML);
  $("#totalMark").val(selectedRow.cells[6].innerHTML);

  // Change title and button color
  $("#submitbtn")
    .text("Update")
    .removeClass("btn-primary")
    .addClass("btn-outline-primary");

  message();
}

function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.course;
  selectedRow.cells[2].innerHTML = formData.title;
  selectedRow.cells[3].innerHTML = formData.description;
  selectedRow.cells[4].innerHTML = formData.subDate;
  selectedRow.cells[5].innerHTML = formData.oralMark;
  selectedRow.cells[6].innerHTML = formData.totalMark;
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
