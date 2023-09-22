<?php

$message = false;

if (isset($_POST['link']) AND 
isset($_POST['thumbnail']) AND
isset($_POST['title']) AND
isset($_POST['description']) AND
isset($_POST['category'])) {

    if (strlen($_POST['link']) > 10 AND 
    strlen($_POST['thumbnail']) > 10) {
        $result = $db->query(
            sprintf("INSERT INTO uploads (link, thumbnail, name, description, category_id) VALUES ('%s', '%s', '%s', '%s', %d)", 
            $_POST['link'], $_POST['thumbnail'], $_POST['title'], $_POST['description'], $_POST['category'])
        );

        if ($result) {
            header('Location: ?index.php');
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
      <input type="text" class="form-control plc mb-3" id="floatingInput" placeholder="Enter video link" name="link" required>
   
   <label for="floatingInput">Thumbnail link </label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter thumbnail link" name="thumbnail" required>


   <label for="floatingInput">Title</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter video title" name="title" required>

   <label for="floatingInput">Description</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Enter video description" name="description" required>


   <label for="floatingInput">Category</label>
      <input type="text" class="form-control plc mb-4" id="floatingInput" placeholder="Password" name="category" required>



      <?php if($message) : ?>
      <div class="alert alert-danger">
          <?= $message ?>
      </div>
    <?php endif; ?>

    <button class="btn btn-primary w-100 py-2" type="submit">Upload</button>

  </form>
</div>