function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  handleSelectedFile(files[0]);
  
  const fileInput = document.getElementById("csvInput");
  fileInput.files = event.dataTransfer.files;
  fileInput.dispatchEvent(new Event("change"));
}


function handleFileInputChange(event) {
  const files = event.target.files;
  handleSelectedFile(files[0]);
}

function handleSelectedFile(file) {
  if (file.type === "text/csv") {
    displayFileInfo(file);
  
    const phpBtnInput = document.getElementById("phpBtn");
    phpBtnInput.files = new FileList([file]);
  } else {
    alert("Please select a .csv file.");
  }
}

function displayFileInfo(file) {
  const fileInfoElement = document.getElementById("fileInfo");
  fileInfoElement.textContent = `File Name: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`;
}

document.getElementById("csvInput").addEventListener("change", handleFileInputChange);
