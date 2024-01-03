<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set CORS headers to allow requests from your React app
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


// Connect to your database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch distinct locations
$sqlDistinctLocations = "SELECT COUNT(DISTINCT location) AS totalLocations FROM jobs";
$result = $conn->query($sqlDistinctLocations);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $totalLocations = $row['totalLocations'];
    echo json_encode(["totalLocations" => $totalLocations]);
} else {
    echo json_encode(["totalLocations" => 0]); // Return 0 if no locations found
}

$conn->close();
?>
