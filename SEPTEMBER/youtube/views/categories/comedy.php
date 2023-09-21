
<h5 class="mt-4">Comedy category</h5>

<?php
    $id = $_GET['id'];
    $result = $db->query("SELECT * FROM uploads WHERE category_id = $id");
    $videos = $result->fetch_all(MYSQLI_ASSOC);
?>


