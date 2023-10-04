<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schedule</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/css/style.css" />

    
</head>
<body>
    <div class="container">
    <h1 class="text-center mt-4 mb-3">Students list</h1>
<button class="btn btn-light"><a href="/homepage">Go to homepage</a></button>

@foreach ($data as $student)

    <div class="row mx-0 background my-4">
        <div class="col-1 d-flex">  
        <img class="rounded-circle" src="{{ $student['picture'] }}" alt="{{ $student['name'] }} {{ $student['surname'] }}">
    </div>
    <div class="col-2 d-flex flex-column">
        <h4>Student:</h4>
        <p>Full name: {{ $student['name'] }} {{ $student['surname'] }}</p>
        <p>Age: {{ $student['age'] }}</p>
</div>
        
        <div class="col-9 d-flex flex-column ">
           <h4>Contacts:</h4>
           <p>Phone no: {{ $student['phone'] }}</p>
           <p>Email: {{ $student['email'] }}</p>
        </div>
       
      
    </div>
@endforeach
</div>


</body>
</html>



