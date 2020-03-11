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
  formData["title"] = $("#formTitleCourse").val();
  formData["stream"] = $("#formStreamCourse").val();
  formData["type"] = $("#formTypeCourse").val();
  formData["startDate"] = $("#formStartDateCourse").val();
  formData["endDate"] = $("#formEndDateCourse").val();
  return formData;
}

function insertNewRecord(data) {
  if (checkDate()) {
    alert("Incorrect entry, End Date can't be earlier than Start Date");
    e.preventDefault();
  } else {
    let table = document
      .getElementById("course-table")
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.number;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.stream;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.startDate;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.endDate;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML =
      '<button type="button" class="btn btn-primary" onClick="onEdit(this)">Edit</button>';
  }
}

function resetForm() {
  $("#formTitleCourse").val("");
  $("#formStreamCourse").val("");
  $("#formTypeCourse").val("");
  $("#formStartDateCourse").val("");
  $("#formEndDateCourse").val("");
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  $("#formTitleCourse").val(selectedRow.cells[1].innerHTML);
  $("#formStreamCourse").val(selectedRow.cells[2].innerHTML);
  $("#formTypeCourse").val(selectedRow.cells[3].innerHTML);
  $("#formStartDateCourse").val(selectedRow.cells[4].innerHTML);
  $("#formEndDateCourse").val(selectedRow.cells[5].innerHTML);
  // Change title and button color
  $("#submitbtn")
    .text("Update")
    .removeClass("btn-primary")
    .addClass("btn-outline-primary");

  message();
}

function updateRecord(formData) {
  if (checkDate()) {
    alert("Incorrect entry, End Date can't be earlier than Start Date");
    e.preventDefault();
  } else {
    selectedRow.cells[1].innerHTML = formData.title;
    selectedRow.cells[2].innerHTML = formData.stream;
    selectedRow.cells[3].innerHTML = formData.type;
    selectedRow.cells[4].innerHTML = formData.startDate;
    selectedRow.cells[5].innerHTML = formData.endDate;
    --number;
    // Change title and button color
    $("#submitbtn")
      .text("Submit")
      .removeClass("btn-outline-primary")
      .addClass("btn-primary");
  }
}

//Modal show and auto hide
function message() {
  $("#memberModal").modal("show");
  setTimeout(function() {
    $("#memberModal").modal("hide");
  }, 1800);
}

//Ckeck course date
function checkDate() {
  let startDate = $("#formStartDateCourse").val();
  let endDate = $("#formEndDateCourse").val();
  let varDate = new Date(startDate);
  let today = new Date(endDate);
  return varDate >= today;
}
