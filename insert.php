<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_POST["uploadBtn"]) && !empty($_FILES["uploadedFile"]["name"])) {
    $targetDirectory = "C:/xampp/htdocs/DragAndDropDemo/";
    $fileName = basename($_FILES["uploadedFile"]["name"]);
    $targetFilePath = $targetDirectory . $fileName;
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    $allowedTypes = array("csv");
    if (in_array($fileType, $allowedTypes)) {
        if (move_uploaded_file($_FILES["uploadedFile"]["tmp_name"], $targetFilePath)) {
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading the file.";
        }
    } else {
        echo "Only CSV files are allowed.";
    }
}
?>
