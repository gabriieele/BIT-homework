<?php
$file = 'skaicius.txt';
//nuskaitomas skaicius.txt turinys
$prevRandString = file_get_contents($file);


$letters = 'abcdefghijklmnopqrstuvwxyz';
$generatedStrings = [];
$number=0;

while(true){
    $randString = '';
    for ($i = 0; $i < 3; $i++) {
        $randString .= $letters[rand(0, strlen($letters) - 1)];
    }
    $generatedStrings[] = $randString;
  
    
    if($randString === $prevRandString){
        break;
    }
    $number++;
}

echo "Sugeneruoti stringai:<br>";
foreach ($generatedStrings as $string) {
    echo $string . "<br>";
}

echo "<br>";
echo "Sutapęs stringas: " . $prevRandString . "<br/> Prireikė " . $number . " kitų sugeneruotų string'ų atspėti tinkamą";
?>
