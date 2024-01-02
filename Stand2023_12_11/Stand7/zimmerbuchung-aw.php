<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <title>Formular Auswertung</title>
</head>

<body>

    <h1> Ihre Daten: </h1>

    <?php
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = empty($_POST["name"]) ? "Kein Name" : $_POST["name"];
        $check_in = $_POST["check-in"];
        $check_out = $_POST["check-out"];
        $room_type = $_POST["room-type"];
        $special_requests = $_POST["special-requests"];

    echo "<p> $name </p>";
    echo "<p> $check_in </p>";
    echo "<p> $check_out </p>";
    echo "<p> $room_type </p>";
    echo "<p> $special_requests </p>";
    }

    
    
    ?>    

    <script src="zimmerbuchung.js"></script>
</body>

</html>