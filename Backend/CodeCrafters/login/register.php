<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include 'db_setup.php';

$data = json_decode(file_get_contents('php://input'), true);

if ($data && isset($data['username']) && isset($data['password']) && isset($data['email'])) {
    $username = $conn->real_escape_string($data['username']);
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $email = $conn->real_escape_string($data['email']);

    $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email);

    if ($stmt->execute()) {
        $response = array('message' => 'Registration successful', 'status' => 'success');
    } else {
        $response = array('message' => 'Registration failed: ' . $stmt->error, 'status' => 'error');
    }

    $stmt->close();
} else {
    $response = array('message' => 'Invalid request', 'status' => 'error');
}

echo json_encode($response);
$conn->close();
?>



