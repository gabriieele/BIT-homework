<?php
$id = $_GET['id'];


    foreach ($videos as $video) {
        if ($video['id'] === $id) {
            echo "<iframe width='615' height='470' src='{$video['video-url']}' title='YouTube video' allowfullscreen></iframe>";
        }
    }
    $videos = $result->fetch_all(MYSQLI_ASSOC);

?>