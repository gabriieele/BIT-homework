<?php
$id = $_GET['id'];

//perziuros
if ($id) {
    $db->query("UPDATE uploads SET views = views + 1 WHERE id = $id");
}

$res = $db->query("SELECT * FROM users");

if ($res->num_rows > 0) {
    $users = $res->fetch_all(MYSQLI_ASSOC);
}


    foreach ($videos as $video) { 
        foreach($categories as $category){
            if ($video['id'] === $id && $video['category_id'] === $category['id']) {  
        foreach($users as $user){
        if ($video['id'] === $id && $video['user_id'] === $user['id']) {

            echo "<div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <iframe class='my-3' width='100%' height='700' src='$video[link]' title='YouTube video' allowfullscreen></iframe>
                </div>
            </div>
            <div class='row'>
                <div class='col-lg-12'>
                    <div class='bckgrnd mb-3'>
                        <h5 class='mb-2'>$video[name]</h5>
                        <h6 class='mb-2'>Author: $user[username]</h6> 
                        <h6 class='mb-2'>Category: $category[name]</h6>
                        <h6 class='mb-2'>Views: $video[views]</h6>
                        <p class='mt-3 mb-0'>$video[description]</p>
                    </div>
                </div>
            </div>
          </div>";
    
            
            }
        }
        }
        }
    }
    $videos = $result->fetch_all(MYSQLI_ASSOC);

?>