<?php
session_start();



$page = isset($_GET['page']) ? $_GET['page'] : false;

try {
    $db = new mysqli('localhost', 'root', '', 'youtube');
} catch(Exception $klaida) {
    echo 'Nepavyko prisijungti';
    exit;
}


$res = $db->query("SELECT * FROM categories");
if ($res->num_rows > 0) {
    $categories = $res->fetch_all(MYSQLI_ASSOC);
}

//search
if (isset($_POST['search'])) {
    $video = $_POST['search'];
    $result = $db->query("SELECT * FROM uploads WHERE name LIKE '%$video%'");
}  elseif (isset($_GET['category'])) {
    $id = $_GET['category'];
    $result = $db->query("SELECT * FROM uploads WHERE category_id = $id");
} 

 else{
    $result = $db->query("SELECT * FROM uploads");
 }

 if ($result->num_rows > 0) {
    $videos = $result->fetch_all(MYSQLI_ASSOC);
}
    
$successMessage = isset($_SESSION['success_message']) ? $_SESSION['success_message'] : null;

// nuimamas kintamasis kai zinute parodoma
unset($_SESSION['success_message']);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youtube aplikacija</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="./style.css">

</head>
<body>

<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="index.php">
      <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" width="120" alt="Youtube Logo PNG Transparent Image" />
      
    </a>
    <form class="d-flex justify-content-between search" role="search" method="POST">
        <div class="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" name="search">
        <button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button></div>
      </form>
      <div>
    <?php if(isset($_SESSION['loggedin']) AND $_SESSION['loggedin']) : ?>
        <a href="?page=upload"><button class="btn btn-primary">Upload a video</button></a>
        <a href="?page=logout"><button class="btn btn-primary">Log out</button></a>
        <?php else : ?>
      <a href="?page=login"><button class="btn btn-primary">Log in</button></a>
        <a href="?page=signup"><button class="btn btn-primary">Sign up</button></a>
        <?php endif ?>
    </div>
  </div>
</nav>
  <div class="container">
    <div class="categories d-flex mt-3 mb-3">
    <a href="index.php"><button class="btn btn-light <?= !isset($_GET['category']) || isset($_POST['search'])? 'selected-btn' : '' ?>">All categories</button></a>
    <?php foreach ($categories as $category) : ?>
        <!-- pasirinkta kategorija - juodas mygtukas -->
        <a href="?category=<?= $category['id'] ?>"><button class="btn btn-light <?= (isset($_GET['category']) && $_GET['category'] == $category['id']) ? (isset($_POST['search']) ? '' : 'selected-btn') : '' ?>"><?= $category['name'] ?></button></a>
        <?php endforeach; ?>
    </div>
    <!-- sekmingai ikelus video, parodomas pranesimas -->
      <?php if ($successMessage) : ?>
    <div id="successMessage" class="alert alert-success">
        <?= $successMessage ?>
    </div>
    <?php endif; ?>
    <?php
    
    switch ($page) {
        case "category":
            include './views/categories/categories.php';
            break;
        case "video":
            include './views/video/video.php';
            break;
        case "signup":
            include './views/signup.php';
            break;
        case "login":
            include './views/login.php';
            break;
        case "upload":
            include './views/upload.php';
            break;
        case "logout":
            include './views/logout.php';
            break;
            default:
            include './views/main.php';
    }

       ?>

       
       
       
</div>
<script>
    setTimeout(function () {
        var successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'none';
        }
    }, 3500);
</script>
</body>
</html>