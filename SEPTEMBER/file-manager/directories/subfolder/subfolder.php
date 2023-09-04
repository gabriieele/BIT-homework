<?php
$home = '../index.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File manager</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../../style.css">
</head>
<body>
    <header>
    <nav class="navbar navbar-expand-lg justify-content-between">
  <div class="container-fluid">
    <div class="logo"><a class="navbar-brand" href="#">H3K DEMO</a>
    <a class="navbar-brand" href=<?= $home; ?>><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg></a></div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Upload</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New Item</a>
        </li>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Settings</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </header>
    <div class="container">
<table class="table table-striped mt-4">
  <thead>
    <tr>
      <th scope="col"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
      <th scope="col">Name</th>
      <th scope="col">Size</th>
      <th scope="col">Modified</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  <tr >
      <th></th>
      <td><a href = "../video/video.php"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
      <td>Files</td>
      <td>file</td>
      <td>data</td>
      <td>veiksmai</td>
    </tr>
  </tbody>
</table>
</div>
</body>
</html>