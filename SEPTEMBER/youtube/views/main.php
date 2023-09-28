<?php

$videosPerPage = 20; 


//tikrinimas ar video yra
if (isset($videos) && !empty($videos)) {
    $totalVideos = count($videos);
} else {
    echo '<h3>No results found</h3>';
    exit;
}
   $totalPages = ceil($totalVideos / $videosPerPage); 


$currentPage = isset($_GET['page']) ? intval($_GET['page']) : 1;
$category = isset($_GET['category']) ? $_GET['category'] : '';


//offsetas
//kur prasideda sarasas, kuri norima atvaizduoti
$offset = ($currentPage - 1) * $videosPerPage;

//visas sarasas, nuo kur pradeti, kiek per puslapi
$videos = array_slice($videos, $offset, $videosPerPage);
?>

<!-- video yra is search $video = $_GET['search']; -->
<?php if ($category === '' && !isset($_GET['search'])) : ?>
    <div class="mb-3">
        <a href="?filter">Filter by Most Popular</a>
    </div>
<?php elseif (isset($_GET['search'])) : ?>
    <div class="mb-3">
        <a href="?search=<?=$video?>&filter">Filter by Most Popular</a>
    </div>
<?php else : ?>
    <div class="mb-3">
        <a href="?category=<?= $category ?>&filter">Filter by Most Popular</a> 
    </div>
<?php endif; ?>




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
            <?php $prevLink = ($currentPage - 1); ?>
            <?php if ($category === '' AND !isset($_GET['search'])) : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $prevLink ?>">Previous</a></li>
                <?php elseif (isset($_GET['search'])) : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $prevLink ?>&search=<?= $video ?>">Previous</a></li>
            <?php else : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $prevLink ?>&category=<?= $category ?>">Previous</a></li>
            <?php endif; ?>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $totalPages; $i++) : ?>
            <?php if ($category === '' AND !isset($_GET['search']) ) : ?>
                <li class="page-item <?= ($i === $currentPage) ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a></li>
                <?php elseif (isset($_GET['search'])) : ?>
                <li class="page-item <?= ($i === $currentPage) ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>&search=<?= $video ?>"><?= $i ?></a></li>
            <?php else : ?>
                <li class="page-item <?= ($i === $currentPage) ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>&category=<?= $category ?>"><?= $i ?></a></li>
            <?php endif; ?>
        <?php endfor; ?>

        <?php if ($currentPage < $totalPages) : ?>
            <?php $nextLink = ($currentPage + 1); ?>
            <?php if ($category === '' AND !isset($_GET['search'])) : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $nextLink ?>">Next</a></li>
                <?php elseif (isset($_GET['search'])) : ?>
                    <li class="page-item"><a class="page-link" href="?page=<?= $nextLink ?>&search=<?= $video ?>">Next</a></li>
            <?php else : ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $nextLink ?>&category=<?= $category ?>">Next</a></li>
            <?php endif; ?>
        <?php endif; ?>
    </ul>
</div>