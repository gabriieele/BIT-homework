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
    <h1 class="text-center mt-4">Explore The Schedule</h1>
<p class="text-center mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet dolorum ab fugit odit odio.</p>
<button class="btn btn-light"><a href="/students">Go to students page</a>
</button>

@for($i = 0; $i < 3; $i++)
    <div class="row d-flex background my-4 mx-0">
        <div class="col-2 d-flex justify-content-center">  
            <img class="round" src="https://www.applify.com.sg/blog/wp-content/uploads/2023/08/What-is-the-Difference-Between-Web-Development-and-Programming.jpg" alt="web developer">
        </div>
        <div class="col-6 d-flex flex-column justify-content-center">
            <h4>Start a New Conversation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde vitae voluptas incidunt.</p>
        </div>
        <div class="col-4 d-flex flex-column justify-content-center">
            <h4>Between 12:00 - 13:15</h4>
            <p style="color: orange;">Mark Smith, Developer at Themeforest</p> 
        </div>
    </div>
@endfor

</div>


</body>
</html>



