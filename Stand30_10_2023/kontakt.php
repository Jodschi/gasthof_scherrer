<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Ratzesberger, Reiter">
    <title>Kontakt</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <header>
        <h1>Kontakt</h1>
    </header>
    <nav class="sticky_header">
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
    <section>
        <h2>Kontaktinformationen:</h2>
        <p>Firma: Gasthof Scherrer</p>
        <p>Adresse: Pfarrkirchen i.Mkr. 16, 4141 Pfarrkirchen</p>
        <p>Telefon: 07285 409</p>
        <p>E-Mail: gasthof.scherrer@aon.at</p>
    </section>

    <section>
        <h2>Kontaktformular:</h2>
        <form action="kontaktformular.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="nachricht">Ihre Nachricht:</label>
            <textarea id="nachricht" name="nachricht" rows="4" required></textarea>
            
            <input type="submit" value="Nachricht abschicken">
        </form>
    </section>

    <footer>
        &copy; Gasthof Scherrer
    </footer>

    <script src="header.js"></script>
</body>
</html>
