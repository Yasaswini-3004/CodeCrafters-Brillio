<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include 'db_setup.php';

$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['username']) && isset($data['password'])) {
    $username = $conn->real_escape_string($data['username']);
    $password = $data['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            // User found, login successful
            $response = array('message' => 'Login successful', 'status' => 'success');
        } else {
            // Password does not match, login failed
            $response = array('message' => 'Invalid username or password', 'status' => 'error');
        }
    } else {
        // User not found, send a specific status
        $response = array('message' => 'User not found', 'status' => 'user_not_found');
    }

    $stmt->close();
} else {
    // Invalid request
    $response = array('message' => 'Invalid request', 'status' => 'error');
}

echo json_encode($response);
$conn->close();
?>



