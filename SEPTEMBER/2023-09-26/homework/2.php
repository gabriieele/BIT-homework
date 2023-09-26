<?php

class Vaisius {
   public $dydis;
   public $id;
   public $prakastas;
    
   public function __construct() {
     $this->dydis = rand(5, 25);
     $this->id = rand(1000000, 9999999);
     $this->prakastas = false;
   }
   
   public function prakasti(){
    $this->prakastas = true;
    if($this->prakastas == true){
        return "Vaisius prakastas";
    }
   }
}

class Krepsys extends Vaisius {
    public static $vaisiai = [];

    public static function pripildyti() {
        $totalFruits = count(self::$vaisiai);
        $remainingFruits = 20 - $totalFruits;
    
        for ($i = 0; $i < $remainingFruits; $i++) {
            $vaisius = new Vaisius();
            array_push(self::$vaisiai, $vaisius);
            rsort(self::$vaisiai);
        }
    }
    // Klasėje Krepšys sukurti statinį metodą isimti(), kuris iš vaisiai masyvo išimtų (ištrintų iš masyvo) pirmą (didžiausią) vaisių ir jį grąžintų.
    public static function isimti() {
        self::$vaisiai[0]->prakasti();
        //isims is masyvo ir grazins pirma masyvo objekta
            $max = array_shift(self::$vaisiai);
            return $max;
}


}


$vaisius = new Vaisius();
echo $vaisius->prakasti() . '<br>'; 

echo '<pre>';
Krepsys::pripildyti();
print_r(Krepsys::$vaisiai);

echo 'Didžiausias vaisius:';
$max = Krepsys::isimti();
print_r($max);

echo 'Papildytas  masyvas:';
Krepsys::pripildyti();
print_r(Krepsys::$vaisiai);

$grauztukas1 = Krepsys::isimti();
$grauztukas2 = Krepsys::isimti();

$grauztukai = (object) array(
    $grauztukas1->id => $grauztukas1,
    $grauztukas2->id => $grauztukas2,
);

echo "Išimti graužtukai:";
print_r($grauztukai);


?>
