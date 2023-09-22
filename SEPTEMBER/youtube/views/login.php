<?php

$message = false;

if (isset($_POST['email']) AND 
isset($_POST['password'])) {

    if (strlen($_POST['email']) > 3 AND 
    strlen($_POST['password']) > 3) {
        $result = $db->query(
            sprintf("SELECT id FROM users WHERE email = '%s' AND password = '%s'", $_POST['email'], $_POST['password'])
        );

        if ($result->num_rows) {
            $user = $result->fetch_assoc();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['loggedin'] = true;
            header('Location: index.php');
            exit;
        } else {
            $message = 'Wrong email or password';
        }
    } else {
        $message = 'Email or password not entered or too short';
    }
}
?>
    


<div class="d-flex justify-content-center">
  <form class="signUp" method="POST">
    <h1 class="h3 mb-3 mt-3 text-center">Welcome! Please login:</h1>

   <label for="floatingInput">Email address</label>
      <input type="email" class="form-control plc mb-3" id="floatingInput" placeholder="name@example.com" name="email" required>
   
   <label for="floatingPassword">Password </label>
      <input type="password" class="form-control plc mb-4" id="floatingPassword" placeholder="Password" name="password" required>
      <?php if($message) : ?>
      <div class="alert alert-danger">
          <?= $message ?>
      </div>
    <?php endif; ?>

    <button class="btn btn-primary w-100 py-2" type="submit">Log in</button>

  </form>
</div>