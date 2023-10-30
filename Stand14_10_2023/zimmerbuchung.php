<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Ratzesberger, Reiter">
    <title>Zimmerbuchung</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>Zimmerbuchung</h1>
    </header>
    <nav>
        <ul>
            <li><a href="index.html">Startseite</a></li>
            <li><a href="speisekarte.php">Speisekarte</a></li>
            <li><a href="zimmerbuchung.php">Zimmerbuchung</a></li>
            <li><a href="tischreservierung.php">Tischreservierung</a></li>
            <li><a href="kontakt.php">Kontakt</a></li>
            <li><a href="datenschutz.php">Datenschutz</a></li>
            <li><a href="impressum.php">Impressum</a></li>
        </ul>
    </nav>
    <form action="zimmerbuchung.php" method="post">
        <br>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input type="text" class="form-control-plaintext" id="staticEmail2" placeholder="email@example.com">
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Passwort</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
            <div class="col-auto">
                <button type="submit">Identität bestätigen</button>
            </div>
            <div><label for="check-in">Check-In Datum:</label>
                <input type="date" id="check-in" name="check-in" required>
            </div>
            <div><label for="check-out">Check-Out Datum:</label>
                <input type="date" id="check-out" name="check-out" required>
            </div>
            <div><label for="room-type">Zimmertyp:</label>
                <select id="room-type" name="room-type">
                    <option value="Einzelzimmer">Einzelzimmer</option>
                    <option value="Doppelzimmer">Doppelzimmer</option>
                    <option value="Suite">Suite</option>
                    <br>
                </select>
            </div>
            <div> <label for="special-requests">Besondere Wünsche:</label>
                <textarea id="special-requests" name="special-requests"></textarea>
            </div>
            <div><input type="submit" value="Buchung abschicken"></div>
        </form>
        <footer>
            &copy; Gasthof Scherrer
        </footer>
</body>

</html>