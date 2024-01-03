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

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Create connection to the database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get data sent from the frontend
    $names = $_POST['names'];
    $emails = $_POST['emails'];
    $date = date('Y-m-d'); // Current date
    $time = date('H:i:s'); // Current time

    // Split names and emails into arrays
    $namesArr = explode(',', $names);
    $emailsArr = explode(',', $emails);

    // Loop through each name and email to insert into the table
    for ($i = 0; $i < count($namesArr); $i++) {
        $fullName = trim($namesArr[$i]);
        $email = trim($emailsArr[$i]);

        // Prepare SQL statement to insert data into a table (assuming a table named 'sent_emails')
        $stmt = $conn->prepare("INSERT INTO sent_emails (FullName, Email, Date, Time) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $fullName, $email, $date, $time);

        // Execute the SQL statement
        if ($stmt->execute()) {
            echo json_encode(array("status" => "success"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Failed to store data."));
        }

        // Close the statement
        $stmt->close();
    }

    // Close the connection
    $conn->close();
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method."));
}
?>
