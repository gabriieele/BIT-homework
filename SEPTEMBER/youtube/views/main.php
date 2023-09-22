<?php

?>
<div class="row">
    <?php foreach ($videos as $video) : ?>
       <div class="col-4 my-2">
       <a href="?page=video&id=<?=$video['id']?>"><img src="<?= $video['thumbnail'] ?>" class="mb-2" alt="youtube thumbnail" width="415px"></img></a>
           <h6><?= $video['name'] ?></h6>
       </div>
    <?php endforeach; ?>
</div>