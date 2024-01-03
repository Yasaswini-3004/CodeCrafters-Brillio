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

// Check if it's a GET request with a date parameter
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['date'])) {
    $date = $_GET['date']; // Get the date parameter

    // Create connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to count emails sent on a particular date
    $stmt = $conn->prepare("SELECT COUNT(*) AS emailCount FROM sent_emails WHERE Date = ?");
    $stmt->bind_param("s", $date);
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch count
    if ($row = $result->fetch_assoc()) {
        echo json_encode(array("status" => "success", "count" => $row['emailCount']));
    } else {
        echo json_encode(array("status" => "success", "count" => 0)); // If no records found, return 0
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method or missing date parameter."));
}
?>
