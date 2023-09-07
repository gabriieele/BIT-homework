<?php
$path = isset($_GET['path']) ? $_GET['path'] : '.';

$files = scandir($path);
unset($files[0]);
if($path === '.'){
  unset($files[1]);
}

// Patikrinama ar failas egzistuoja ir ar didesnis nei 0 bits
if (isset($_FILES['failas']) && $_FILES['failas']['size'] > 0) {
  if ($_FILES['failas']['size'] > 400000) {
      echo 'Failo dydis yra per didelis';
  } else {
//pagrindine direktorija
    $currentDirectory = './';
//tikrinama ar linke esanti direktorija egzistuoja ir, jei taip, pridedama  tiksli direktorija, kur failas bus ikeltas
    if(!empty($_GET['path'])){
      $currentDirectory .= rtrim($_GET['path'], '/') . '/'; //rtrim pašalina visus galinius kablelius ir nereikalingus bruksnelius 
    }

    //pats failo pridejimas
          move_uploaded_file($_FILES['failas']['tmp_name'], $currentDirectory . $_FILES['failas']['name']);
          echo 'Failas sekmingai ikeltas';
      }
  }

  
  if (isset($_POST['createItem'])) {
    if (isset($_POST['createType'])) {
        header('Location: index.php?path=' . $path); // peradresavimas
        //directory gaunama is inputo value
        if ($_POST['createType'] === 'directory') {
            $filePath = $path . '/' . $_POST['itemName'];
            // kuriamas naujas folderis tam tikroj direktorijoj
            if (!mkdir($filePath)) {
                echo 'Klaida kuriant direktorija';
            } else {
                echo 'Direktorija sekmingai sukurta';
            }
            //file pareina is inputo value
        } elseif ($_POST['createType'] === 'file') {
            $filePath = $path . '/' . $_POST['itemName'];
            //naujas failas
            //failo sukūrimui naudojama touch
            if (!touch($filePath)) {
                echo 'Klaida kuriant faila';
            } else {
                echo 'Failas sekmingai sukurtas';
            }
        }
    } else {
        echo 'Pasirinkite failo tipa';
    }
}

if (isset($_POST['newItem']) && isset($_POST['oldFIleName'])) {
  $newName = $_POST['newItem'];
  $oldName = $_POST['oldFIleName'];

   //ar pasirinktas failas egzistuoja
  if (file_exists($path . '/' . $oldName)) {
      $oldPath = $path . '/' . $oldName;
      $newPath = $path . '/' . $newName;

//ar jau nera tokio pat failo pavadinimo
      if (file_exists($newPath)) {
        echo "Toks pavadinimas jau egzistuoja";
      } else {
         //pervadinimas failu
          if (rename($oldPath, $newPath)) {
           
            echo "Failas pervadintas sekmingai";
    //duomenu atnaujinimas pasikeitus failu pavadinimams, nes filesize gauna errora, nes vis dar tikrina sena faila
    $files = scandir($path);
    unset($files[0]);
    if($path === '.'){
      unset($files[1]);
    }
  
          } else {
              echo "Klaida pervadinant faila";
          }
      }
  } 
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File manager</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
    <nav class="navbar navbar-expand-lg justify-content-between">
  <div class="container-fluid">
    <div class="logo"><a class="navbar-brand" href="#">H3K DEMO</a>
    <a class="navbar-brand" href=<?= "." ?>><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg></a></div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>

</div>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link upld" aria-current="page" href="#"><i class="bi bi-cloud-arrow-up-fill ms-1 me-1"></i>Upload</a>
        </li>
        <li class="nav-item">
          <a class="nav-link newItem" href="#"><i class="bi bi-plus-square me-1"></i>New Item</a>
        </li>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="bi bi-gear-fill me-1"></i>Settings</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </header>
    <div class="container">
      

    
        

<button class="btn btn-primary selectAll mt-3">Select all</button>
<button class="btn btn-primary mt-3">Delete</button>
    <table class="table table-striped mt-3">   
      <thead>
  
                    <tr>
                        <th scope="col"><input class="form-check-input" type="checkbox" value="" name= "id[]" id="flexCheckDefault"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Modified</th>
                        <th scope="col">Actions</th>
                    </tr>
                    
                </thead> <tbody>
   
                    <?php
                
                    foreach ($files as $file) {
                      if($file !== "index.php" and $file !== "style.css"){
                        //tikrinant ar tai failas ar folderis, reikia visa kelia nurodyt, kitu atveju subdirektorijose neskaiciuos faily dydziu
                        $filePath = $path . '/' . $file;
                        //failp visai info, is ten bus imamamas parametras extension
                        $fileExt = pathinfo($file);
                        $fileWithIcon = $file;
         

                        if (is_dir($filePath)) {
                          $fileWithIcon = '<i class="bi bi-folder"></i> ' . $file;
                        }
                        else if (array_key_exists('extension', $fileExt)) {
                          
                        if ($fileExt['extension'] === 'png' OR $fileExt['extension'] === 'jpeg') {
                          $fileWithIcon = '<i class="bi bi-image"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'php') {
                          $fileWithIcon = '<i class="bi bi-filetype-php"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'pdf') {
                          $fileWithIcon = '<i class="bi bi-file-pdf"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'doc' or $fileExt['extension'] === 'docx') {
                          $fileWithIcon = '<i class="bi bi-file-earmark-word"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'txt') {
                          $fileWithIcon = '<i class="bi bi-body-text"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'mp3') {
                          $fileWithIcon = '<i class="bi bi-music-note-beamed"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'mp4' or $fileExt['extension'] === 'avi') {
                          $fileWithIcon = '<i class="bi bi-film"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'html') {
                          $fileWithIcon = '<i class="bi bi-filetype-html"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'css') {
                          $fileWithIcon = '<i class="bi bi-filetype-css"></i> ' . $file;
                        }
                        if ($fileExt['extension'] === 'js') {
                          $fileWithIcon = '<i class="bi bi-filetype-js"></i> ' . $file;
                        }
                    
                       
                        }
                      else {
                 $fileWithIcon = '<i class="bi bi-file-earmark"></i>' . $file; 
                      }

                      
                    ?>
                    
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                            <td class="showForm">
                              <!-- dirname grazins tevinio folderio pavadinima -->
                              <!-- Jei $file yra '..', tai nuoroda ves i tevini folderi, naudojant dirname($path) funkcija (vienu lygiu auksciau)
                       kitu atveju, jei $file nėra '..', tai direktorija bus dabartinis kelias $path, pridedant $file su / -->
                       <a href="?path=<?= $file === '..' ? dirname($path) : ($file === '..' ? '' : $path . '/' . $file) ?>">
                    <?= $file === '..' ? '..' : $fileWithIcon ?>
                </a>
      <form method="POST" class="editName inline-form">
          
        </form>
            </td>
          
                   <td><?= is_dir($filePath) ? 'Folder' : round((filesize($filePath) / 1000),2) . ' KB' ?></td>
                            <td><?= date('Y-m-d H:i', filemtime($filePath)); ?></td>
                            <td>
                              <a href="#" class="edit" data-file="<?= $file ?>"><i class="bi bi-pencil-square"></i></a>
                              <a href="#" ><i class="bi bi-trash-fill ms-1"></i></a>
                            </td>
                        </tr>

                        <?php
                       
                       }
                      }
                    ?> 
                                       
            
         </tbody></table>
         <form class="upload" method="POST" enctype="multipart/form-data"></form>
         <form class="create" method="POST" enctype="multipart/form-data"></form>
      
    

    </div>
    <script>
const upload = document.querySelector(".upload");
const create = document.querySelector(".create");
const btn = document.querySelector(".newItem");
const btn2 = document.querySelector(".upld");
const showForm = document.querySelectorAll(".showForm");

btn.addEventListener('click', (e) => {
  e.preventDefault();
  create.innerHTML = '<label for="itemName" class="form-label">File or directory name:</label>' +
  '<input type="text" class="form-control" name="itemName" id="itemName">' +
  '<div class="mt-2 mb-3 form-check">' +
  '<input type="radio" class="form-check-input" id="createDirectory" name="createType" value="directory">' +
  '<label class="form-check-label" for="createDirectory">Folder</label>' +
  '</div>' +
  '<div class="mb-2 form-check">' +
  '<input type="radio" class="form-check-input" id="createFile" name="createType" value="file">' +
  '<label class="form-check-label" for="createFile">File</label>' +
  '</div>' +
  '<div class="buttons">' +
  '<button class="btn btn-primary" type="submit" name="createItem">Create</button>' +
  '</div>'

});
btn2.addEventListener('click', (e) => {
  e.preventDefault();
  upload.innerHTML = ' <input type="file" class="form-control" name="failas"><div class="buttons mt-3 mb-3"><button class="btn btn-primary">Upload</button> <button class=" hide btn btn-primary ms-2">Hide</button></div>'
});

const edit = document.querySelectorAll(".edit");
const editName = document.querySelectorAll(".editName");

edit.forEach((editButton, index) => {
  editButton.addEventListener('click', (e) => {
    e.preventDefault();
    const fileName = editButton.getAttribute('data-file');
    const editForm = editName[index];
    editForm.innerHTML = `<div class="mt-3 mb-2"><label>Rename file:</label></div><input type="text" name="newItem" class="form-control"  value="${fileName}"><input type="hidden" name="oldFIleName" value="${fileName}"><div class="buttons mt-3"><button type="submit" class="btn btn-small btn-primary">Rename</button></div>`;
  });
});


const hide = document.querySelectorAll(".hide")

hide.forEach(hideBtn => {
  hideBtn.addEventListener('click', () => {
    upload.innerHTML = '';
  });
});



const selectAll = document.querySelector('.selectAll')
selectAll.addEventListener('click', (e) =>{
  e.preventDefault();
 const ckeckboxes =document.querySelectorAll('.form-check-input').forEach(el =>{
  el.checked = !el.checked;
 })
  
})



     
    </script>
</body>
</html>