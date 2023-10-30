<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Ratzesberger, Reiter">
    <title>Tischreservierung</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Tischreservierung</h1>
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
    <form action="reservierung.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">E-Mail:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Telefonnummer:</label>
        <input type="tel" id="phone" name="phone" required>
        
        <label for="date">Datum:</label>
        <input type="date" id="date" name="date" required>
        
        <label for="time">Uhrzeit:</label>
        <input type="time" id="time" name="time" required>
        
        <label for="party-size">Größe der Gruppe:</label>
        <input type="number" id="party-size" name="party-size" min="1" required>
        
        <label for="special-requests">Besondere Wünsche:</label>
        <textarea id="special-requests" name="special-requests"></textarea>
        
        <label for="newsletter">Newsletter abonnieren:
        <input type="checkbox" id="newsletter" name="newsletter"></label>
        <br>
        <input type="submit" value="Reservierung abschicken">
    </form>

    <footer>
        &copy; Gasthof Scherrer
    </footer>
</body>
</html>
