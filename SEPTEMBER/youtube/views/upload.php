<?php

$message = false;

//userio nustatymas
$user = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 0; 


if (isset($_POST['link']) AND 
isset($_POST['thumbnail']) AND
isset($_POST['title']) AND
isset($_POST['description']) AND
isset($_POST['category'])) {

    if (strlen($_POST['link']) > 10 AND 
    strlen($_POST['thumbnail']) > 10) {

        //del specialiu simboliu, kitaip viengubu kabuciu aprasyme nepriima 
        $description = $db->real_escape_string($_POST['description']);
        $result = $db->query(
            sprintf("INSERT INTO uploads (link, thumbnail, name, description, category_id, user_id) VALUES ('%s', '%s', '%s', '%s', '%d', '%d')", 
            $_POST['link'], $_POST['thumbnail'], $_POST['title'], $description, $_POST['category'], $user)
            
        );

        if ($result) {
            header('Location: ?index.php');
            $_SESSION['success_message'] = "Video successfully posted!";
            exit;
        } else {
            $message = 'Wrong data';
        }
    } else {
        $message = 'Please fill all fields!';
    }
}
?>

<div class="d-flex justify-content-center">
  <form class="signUp" method="POST">
    <h1 class="h3 mb-3 mt-3 text-center">Upload a video</h1>

   <label for="floatingInput">Video link</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter video link" name="link" required>
   
   <label for="floatingInput">Thumbnail link </label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter thumbnail link" name="thumbnail" required>


   <label for="floatingInput">Title</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter video title" name="title" required>

   <label for="floatingInput">Description</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter video description" name="description" required>


      <label for="floatingInput">Category</label>
<select class="form-control mb-4" name="category" id="floatingInput" required>
    <option value="" disabled selected>Choose a category</option>
    <?php foreach ($categories as $category) : ?>
        <option value="<?= $category['id'] ?>"><?= $category['name'] ?></option>
    <?php endforeach ?>
</select>


      <?php if($message) : ?>
      <div class="alert alert-danger">
          <?= $message ?>
      </div>
    <?php endif; ?>

    <button class="btn btn-primary w-100 py-2" type="submit">Upload</button>

  </form>
</div>