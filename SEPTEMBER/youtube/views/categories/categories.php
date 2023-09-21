
<?php
$page = isset($_GET['id']) ? $_GET['id'] : false;
$res = $db->query("SELECT * FROM categories");
if ($res->num_rows > 0) {
    $categories = $res->fetch_all(MYSQLI_ASSOC);
}

foreach($categories as $category){
    if($category['id'] === $page)
   echo "<h5 class='mt-4'>$category[name]</h5>";
}

    $id = $_GET['id'];
    $result = $db->query("SELECT * FROM uploads WHERE category_id = $id");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
?>


