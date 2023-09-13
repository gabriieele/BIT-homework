<?php

$randString = '';
$letters = 'abcdefghijklmnopqrstuvwxyz';


for($i=0; $i<3; $i++){
    $randString .= $letters[rand(0, strlen($letters) - 1)];
}

$name = 'skaicius.txt';
//w - Open for writing only mode
//jei nera failo, ji sukurs, jei bus - isvalys turini jo
$file = fopen($name, 'w');
fwrite($file, $randString);
fclose($file);