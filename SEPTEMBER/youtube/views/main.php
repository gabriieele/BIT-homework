<?php

$videosPerPage = 20; 
$totalVideos = count($videos); 

//kiek is viso bus puslapiu
$totalPages = ceil($totalVideos / $videosPerPage);

$currentPage = isset($_GET['page']) ? intval($_GET['page']) : 1;
$category = isset($_GET['category']) ? $_GET['category'] : '';

//offsetas
//kur prasideda sarasas, kuri norima atvaizduoti
$offset = ($currentPage - 1) * $videosPerPage;

//visas sarasas, nuo kur pradeti, kiek per puslapi
$videos = array_slice($videos, $offset, $videosPerPage);
?>

<div class="row">
    <?php foreach ($videos as $video) : ?>
        <div class="col-4 my-2">
            <a href="?page=video&id=<?= $video['id'] ?>"><img src="<?= $video['thumbnail'] ?>" class="mb-2" alt="youtube thumbnail" width="415px"></a>
            <h6><?= $video['name'] ?></h6>
        </div>
    <?php endforeach; ?>
</div>

<div class="d-flex justify-content-center mt-3 mb-2">
    <ul class="pagination">
        <?php if ($currentPage > 1) : ?>
            <!-- jei kategorijos viduje einama per puslapius -->
            <?php if ($category === '') : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $currentPage - 1 ?>">Previous</a></li>
            <?php else : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $currentPage - 1 ?>&category=<?= $category ?>">Previous</a></li>
            <?php endif; ?>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $totalPages; $i++) : ?>
            <?php if ($category === '') : ?>
                <li class="page-item <?= ($i === $currentPage) ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a></li>
            <?php else : ?>
                <li class="page-item <?= ($i === $currentPage) ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>&category=<?= $category ?>"><?= $i ?></a></li>
            <?php endif; ?>
        <?php endfor; ?>

        <?php if ($currentPage < $totalPages) : ?>
            <?php if ($category === '') : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $currentPage + 1 ?>">Next</a></li>
            <?php else : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $currentPage + 1 ?>&category=<?= $category ?>">Next</a></li>
            <?php endif; ?>
        <?php endif; ?>
    </ul>
</div>
