<?php
$page = isset($_GET['page']) ? $_GET['page'] : false;

try {
    $db = new mysqli('localhost', 'root', '', 'youtube');
} catch(Exception $klaida) {
    echo 'Nepavyko prisijungti';
    exit;
}

$result = $db->query("SELECT * FROM uploads");

if ($result->num_rows > 0) {
    $videos = $result->fetch_all(MYSQLI_ASSOC);
}

$res = $db->query("SELECT * FROM categories");
if ($res->num_rows > 0) {
    $categories = $res->fetch_all(MYSQLI_ASSOC);
}



//search
if (isset($_POST['search'])) {
    $video =  $_POST['search'];
    $result = $db->query("SELECT * FROM uploads WHERE name LIKE '%$video%'");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $result = $db->query("SELECT * FROM uploads");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
}

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
    <a class="navbar-brand" href="#">
      <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" width="120" alt="Youtube Logo PNG Transparent Image" />
      
    </a>
    <form class="d-flex" role="search" method="POST">
        <div class="input-group">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" name="search">
        <button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button></div>
      </form>
  </div>
</nav>
  <div class="container">
    <div class="categories d-flex mt-3 mb-3">
    <a href="index.php"><button class="btn btn-light <?= !isset($_GET['id']) ? 'selected-btn' : '' ?>">All categories</button></a>
    <?php foreach ($categories as $category) : ?>
        <a href="?page=id&id=<?=$category['id']?>"><button class="btn btn-light <?= ($page === $category['id']) ? 'selected-btn' : '' ?>"><?=$category['name']?></button></a>
        <?php endforeach; ?>
    </div>

    <?php
    
    switch ($page) {
        case "id":
            include './categories/categories.php';
            break;
        case "video":
            include './video/video.php';
            break;
  
    }

       ?>
<div class="row">
    <?php foreach ($videos as $video) : ?>
       <div class="col-4 my-2">
       <a href="?page=video&id=<?=$video['id']?>"><img src="<?= $video['thumbnail'] ?>" alt="youtube thumbnail" width="415px"></img></a>
           <h6><?= $video['name'] ?></h6>
       </div>
    <?php endforeach; ?>
</div>
       
       
       
</div>
</body>
</html>