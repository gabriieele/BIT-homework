<?php
$page = isset($_GET['id']) ? $_GET['id'] : false;


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
<a href="?id=1"><button class="btn btn-light <?= ($page === '1') ? 'selected-btn' : '' ?>">Fashion</button></a>
<a href="?id=2"><button class="btn btn-light <?= ($page === '2') ? 'selected-btn' : '' ?>">Comedy</button></a>
<a href="?id=3"><button class="btn btn-light <?= ($page === '3') ? 'selected-btn' : '' ?>">Movie trailers</button></a>
<a href="?id=4"><button class="btn btn-light <?= ($page === '4') ? 'selected-btn' : '' ?>">Music</button></a>
<a href="?id=5"><button class="btn btn-light <?= ($page === '5') ? 'selected-btn' : '' ?>">News</button></a>
    </div>

    <?php
       

        switch ($page) {
            case '1':
                include './categories/fashion.php';
                break;
            case '2':
                include './categories/comedy.php';
                break;
            case '3':
                include './categories/movie-trailers.php';
                break;
            case '4':
                include './categories/music.php';
                break;
            case '5':
                include './categories/news.php';
                break;

        }
       ?>
<div class="row">
    <?php foreach ($videos as $video) : ?>
       <div class="col-4 my-2">
           <img width="415" src="<?= $video['thumbnail'] ?>" alt="youtube thumbnail"></img>
           <h6><?= $video['name'] ?></h6>
       </div>
    <?php endforeach; ?>
</div>
       
       
       
</div>
</body>
</html>