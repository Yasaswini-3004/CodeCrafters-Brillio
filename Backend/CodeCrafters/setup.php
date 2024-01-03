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

// If the request is a form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jobtitle = isset($_POST['jobtitle']) ? $_POST['jobtitle'] : '';
    $jobkey = isset($_POST['jobkey']) ? $_POST['jobkey'] : '';
    $location = isset($_POST['location']) ? $_POST['location'] : '';
    $jobtype = isset($_POST['jobtype']) ? $_POST['jobtype'] : '';
    $yearsofexp = isset($_POST['yearsofexp']) ? $_POST['yearsofexp'] : '';
    $jobsummary = isset($_POST['jobsummary']) ? $_POST['jobsummary'] : '';
    $responsibilities = isset($_POST['responsibilities']) ? $_POST['responsibilities'] : '';
    $requiredskills = isset($_POST['requiredskills']) ? $_POST['requiredskills'] : '';
    $tags = isset($_POST['tags']) ? $_POST['tags'] : '';

    // Create table if not exists
    $sqlCreateTable = "CREATE TABLE IF NOT EXISTS jobs (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        jobtitle VARCHAR(255) NOT NULL,
        jobkey VARCHAR(10) NOT NULL,
        location VARCHAR(255) NOT NULL,
        jobtype VARCHAR(50) NOT NULL,
        yearsofexp INT(2) NOT NULL,
        jobsummary TEXT NOT NULL,
        responsibilities TEXT NOT NULL,
        requiredskills TEXT NOT NULL,
        tags TEXT NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if ($conn->query($sqlCreateTable) === TRUE) {
        // Insert form data into the database
        $sqlInsertData = "INSERT INTO jobs (jobtitle, jobkey, location, jobtype, yearsofexp, jobsummary, responsibilities, requiredskills, tags,date)
            VALUES ('$jobtitle', '$jobkey', '$location', '$jobtype', '$yearsofexp', '$jobsummary', '$responsibilities', '$requiredskills', '$tags','$date)";

        if ($conn->query($sqlInsertData) === TRUE) {
            echo json_encode(["message" => "New record created successfully"]);
        } else {
            echo json_encode(["error" => "Error: " . $sqlInsertData . "<br>" . $conn->error]);
        }
    } else {
        echo json_encode(["error" => "Error creating table: " . $conn->error]);
    }
} 

else {
    // Fetch job details from the database
    $sqlFetchJobs = "SELECT * FROM jobs"; // Modify this query based on your table structure
    $result = $conn->query($sqlFetchJobs);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data); // Output the fetched job data as JSON
    } else {
        echo json_encode(array()); // Return an empty array if no data found
    }   
}

$conn->close();
?>

