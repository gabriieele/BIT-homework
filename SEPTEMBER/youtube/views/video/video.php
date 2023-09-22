<?php
$id = $_GET['id'];

$res = $db->query("SELECT * FROM users");
if ($res->num_rows > 0) {
    $users = $res->fetch_all(MYSQLI_ASSOC);
}
    foreach ($videos as $video) { 
        foreach($users as $user){
        if ($video['id'] === $id && $video['user_id'] === $user['id']) {

                   echo "<div class='d-flex flex-column'>
            <iframe class='my-3' width='80%' height='550' src='$video[link]' title='YouTube video' allowfullscreen></iframe>
            <h5 class='mt-3 mb-2'>$video[name]</h5>
            <h6 class='mb-2'>Author: $user[username]</h6>
            <p class='mb-2 col-7' >$video[description]</p>
            </div>"; 
            }
        
        }
    }
    $videos = $result->fetch_all(MYSQLI_ASSOC);

?>