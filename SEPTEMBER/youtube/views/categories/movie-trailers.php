
<h5 class="mt-4">Movie Trailers category</h5>

<?php
    $id = $_GET['id'];
    $result = $db->query("SELECT * FROM uploads WHERE category_id = $id");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
?>
