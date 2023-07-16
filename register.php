<?php
$existingUsers = [
  ['id' => 1, 'name' => 'John Doe', 'email' => 'john@example.com', 'password' => 'password1'],
  ['id' => 2, 'name' => 'Jane Doe', 'email' => 'jane@example.com', 'password' => 'password2']
];

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

if (strpos($email, '@') === false) {
  echo 'Invalid email address.';
  return;
}

foreach ($existingUsers as $user) {
  if ($user['email'] === $email) {
    echo 'Email already exists.';
    return;
  }
}

$newUser = ['id' => count($existingUsers) + 1, 'name' => $firstName . ' ' . $lastName, 'email' => $email, 'password' => $password];
$existingUsers[] = $newUser;

file_put_contents('log.txt', 'User registered: ' . $email . PHP_EOL, FILE_APPEND);

echo 'success';
