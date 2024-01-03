<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set CORS headers to allow requests from your React app
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, OPTIONS');
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

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['date'])) {
    $date = $_GET['date'];

    $sqlFetchJobs = "SELECT jobTitle FROM jobs WHERE DATE(date) = '$date'";
    $result = $conn->query($sqlFetchJobs);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row['jobTitle'];
        }
        echo json_encode($data); // Output the fetched job titles as JSON
    } else {
        echo json_encode(array()); // Return an empty array if no data found
    }
} else {
    echo json_encode(["error" => "Invalid request or date parameter is missing"]);
}

$conn->close();
?>
