<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set CORS headers to allow requests from your React app
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch total count of jobtitle occurrences from the jobs table
$sqlCountJobTitles = "SELECT COUNT(jobtitle) AS totalJobTitles FROM jobs WHERE jobtitle IS NOT NULL";
$resultCount = $conn->query($sqlCountJobTitles);

$totalJobTitles = 0;
if ($resultCount->num_rows > 0) {
    $row = $resultCount->fetch_assoc();
    $totalJobTitles = $row['totalJobTitles'];
}

$response = array(
    "totalJobTitles" => $totalJobTitles
);

echo json_encode($response);

$conn->close();
?>
