<?php

use Illuminate\Support\Facades\Route;
use App\Models\Song;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    echo '<pre>';
    //Visos dainos
    foreach(Song::all() as $data) {
        echo $data->name;
    }
});

Route::get('/2', function() {
    //iesko pagal id
    $song = Song::find(2);
    
    echo "<li>$song->name</li>";
    echo "<li>$song->author</li>";
    echo "<li>$song->link</li>";
});

Route::get('/where', function() {
    //visus rezultatys grazins su get
    $data = Song::where('author', 'Rick Astley')->get();

    echo '<h2>Visi rezultatai</h2>';

    foreach($data as $song) {
        echo "<li>$song->name</li>";
        echo "<li>$song->author</li>";
        echo "<li>$song->link</li>";
    }

    //pati pirma rezultata grazins
    $song = Song::where('author', 'Rick Astley')->first();

    echo '<h2>Pirmas rezultatas</h2>';

    echo "<li>$song->name</li>";
    echo "<li>$song->author</li>";
    echo "<li>$song->link</li>";
});

Route::get('/or-where', function() {
    $data = Song::where('author', 'Rick Astley')
                ->orWhere('name', 'Baby Mandala')
                ->get();

    echo '<h2>Visi rezultatai</h2>';

    foreach($data as $song) {
        echo "<li>$song->name</li>";
        echo "<li>$song->author</li>";
        echo "<li>$song->link</li>";
    }
});

Route::get('/and-where', function() {
    $data = Song::where('author', 'Rick Astley')
                ->where('name', 'Never gonna give you up')
                ->get();

    echo '<h2>Visi rezultatai</h2>';

    foreach($data as $song) {
        echo "<li>$song->name</li>";
        echo "<li>$song->author</li>";
        echo "<li>$song->link</li>";
    }
});

Route::get('/form', function() {
    return view('form');
});


//is formos
Route::post('/new-song', function(Request $uzklausa) {
    // print_r($uzklausa->toArray());
    
    //Pirmas įrašo išssaugojimo būdas:
    //song objekto sukurimas
    // $song = new Song;
    // $song->name = 'Test';
    // $song->author = 'Testas';
    // $song->link = 'http://test';
    //save issaugoja $song objekte saugomus duomenis į duomenų bazę
    // $song->save();

    //Antras įrašo išsaugojimas
    // $song = Song::create([
    //     'name' => 'Nemylėjau tavęs',
    //     'author' => 'Džordana Butkutė',
    //     'link' => 'https://spotify.com'
    // ]);

    //Pridėto įrašo id grąžinimas
    // echo $song->id;

    //Uzklausos duomenu konvertavimas i masyva:
    // ->all()
    // ->toArray()
    
    $song = Song::create($uzklausa->all());
});
