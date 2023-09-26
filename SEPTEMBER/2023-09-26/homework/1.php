<?php  

class Televizorius {
   public $gamintojas;
   public $kanalas;
   public $garsas;

   public $rezultatas;
    
   public function __construct($kanalas, $garsas) {
    $this->rezultatas = 'Televizoriaus kanalas: ' . $kanalas . ', o garso lygis: ' . $garsas;
}

public function increaseSound($garsas) {
    $this-> garsas = $garsas;
    if ($garsas < 100) {
        $this->garsas++;
    }
    else{
        echo 'Garso lygis negali būti aukštesnis nei 100 <br>';
    }
}

public function reduceSound($garsas) {
    $this-> garsas = $garsas;
    if ($garsas > 0) {
        $this->garsas--;
    }
    else{
        echo 'Garso lygis negali būti žemesnis nei 0';
    }
}
public function changeChannel($kanalas) {
    $this-> kanalas = $kanalas;
    if ($kanalas < 50 AND $kanalas > 0) {
        $this->kanalas++;
    } else {
        $this->kanalas = 1; 
    }
}

public function reset() {
    $this->kanalas = 1;
    $this->garsas = 50;
}

public function text() {

    $this->kanalas = 8;
    $this->garsas = 76;
    
return "Televizorius 'Sony' šiuo metu rodo $this->kanalas kanalą, o jo garso lygis $this->garsas";
}
}


$televizorius = new Televizorius(1, 50);
echo $televizorius->rezultatas . '<br />';

$televizorius->increaseSound(2); 
echo "Garso lygis po didinimo: " . $televizorius->garsas . '<br>';

$televizorius->reduceSound(25); 
echo "Garso lygis po mažinimo: " . $televizorius->garsas . '<br>';

$televizorius->changeChannel(20); 
echo "Pakeistas kanalas: " . $televizorius->kanalas . '<br>';

$televizorius->reset(); 
echo "Atstatyti gamykliniai nustatymai, televizoriaus kanalas " . $televizorius->kanalas . "o, garso lygis " . $televizorius->garsas . '<br>';

echo $televizorius->text(); 

?>