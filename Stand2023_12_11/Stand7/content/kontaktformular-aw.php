<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="sidebar.css">
    <title>Formular Auswertung</title>
</head>

<body>

    <div class="header-wrapper">
        <header>
            <h1> Ihre Daten wurden abgesendet </h1>
        </header>
    </div>


    <div class="navbar-wrapper">


        <nav id="sticky-header" class="sticky-header">

            <div class="hamburger_button">
                <div class="stripe"></div>
                <div class="stripe"></div>
                <div class="stripe"></div>
            </div>

            <div id="navbar-links">
                <ul>
                    <li><a href="../index.html">Startseite</a></li>
                    <li><a href="speisekarte.html">Speisekarte</a></li>
                    <li><a href="zimmerbuchung.html">Zimmerbuchung</a></li>
                    <li><a href="tischreservierung.html">Tischreservierung</a></li>
                </ul>
            </div>

        </nav>

    </div>



    <div class="site_body">

        <div class="sidebar-wrapper sidebar-hidden">

            <div class="sidebar-links hidden">
                <ul>
                    <li><a href="../index.html">Startseite</a></li>
                    <li><a href="speisekarte.html">Speisekarte</a></li>
                    <li><a href="zimmerbuchung.html">Zimmerbuchung</a></li>
                    <li><a href="tischreservierung.html">Tischreservierung</a></li>
                </ul>
            </div>

        </div>


        <div class="content">

            <section id="sect1" class="far-right">
                <h2> Ihre Nachricht wurde abgesendet:</h2>
                <table>
                <?php

                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $name = empty($_POST["name"]) ? "Kein Name" : $_POST["name"];
                        $email = empty($_POST["email"]) ? "Keine Email" : $_POST["email"];
                        $message = empty($_POST["message"]) ? "Keine Nachricht" : $_POST["message"];

                        echo "<tr> <td> Name:               </td>    <td> $name             </td> </tr>";
                        echo "<tr> <td> E-Mail:             </td>    <td> $email            </td> </tr>";
                        echo "<tr> <td> Nachricht:          </td>    <td> $message            </td> </tr>";
                        
                    }

                    ?>

                </table>

            </section>

        </div>

    </div>


    <footer>
        <div class="copyright"> &copy; Gasthof Scherrer </div>

        <div class="vertical_stripe"></div>

        <div class="footer-links-wrapper">

            <div class="footer-link">
                <a href="kontakt.html">Kontakt</a>
            </div>

            <div class="footer-link">
                <a href="datenschutz.html">Datenschutz</a>
            </div>

            <div class="footer-link_last">
                <a href="impressum.html">Impressum</a>
            </div>

        </div>
    </footer>


    <script src="header.js"></script>
    <script src="sidebar.js"></script>
    <script src="slide.js"></script>

</body>

</html>