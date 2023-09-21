
<?php

$id = $_GET['id'];

foreach($categories as $category){
    if($category['id'] === $id)
   echo "<h5 class='mt-4'>$category[name]</h5>";
}

    $result = $db->query("SELECT * FROM uploads WHERE category_id = $id");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
?>


