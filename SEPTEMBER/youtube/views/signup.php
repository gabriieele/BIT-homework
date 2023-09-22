<?php
$message = false;

if(isset($_POST['username']) AND
isset($_POST['email']) AND
isset($_POST['password'])) {


    if(strlen($_POST['email']) > 3 AND 
    strlen($_POST['password']) > 3 AND 
    strlen($_POST['username']) > 3) {
        $result = $db->query(
            sprintf("INSERT INTO users (username, email, password) VALUES ('%s', '%s', '%s')", $_POST['username'], $_POST['email'], md5($_POST['password']))
        
        );

        if($result) {
            header('Location: ?page=login');
            exit;
        } else {
            $message = 'This email is already registered';
        }
    } else {
        $message = 'Please enter a valid email, password, and/or username (each with at least 4 characters)';
    }
}
?>

<div class="d-flex justify-content-center">
  <form class="signUp" method="POST">
    <h1 class="h3 mb-3 mt-3 text-center">Registration form</h1>
   
      <label for="floatingInput">Username *</label>
      <input type="text" class="form-control plc mb-3" id="floatingInput" placeholder="Your username" name="username" required >

   <label for="floatingInput">Email address *</label>
      <input type="email" class="form-control plc mb-3" id="floatingInput" placeholder="name@example.com" name="email" required>
   
   <label for="floatingPassword">Password *</label>
      <input type="password" class="form-control plc mb-4" id="floatingPassword" placeholder="Password" name="password" required>
      <?php if($message) : ?>
      <div class="alert alert-danger">
          <?= $message ?>
      </div>
    <?php endif; ?>


    <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>

  </form>
</div>
