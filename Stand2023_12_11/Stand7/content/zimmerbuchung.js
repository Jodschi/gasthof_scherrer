document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault() // Verhindert das normale Absenden des Formulars

        // Erfassen der eingegebenen Daten
        const email = document.getElementById('staticEmail2').value;
        const password = document.getElementById('inputPassword2').value;
        const checkInDate = document.getElementById('check-in').value;
        const checkOutDate = document.getElementById('check-out').value;
        const roomType = document.getElementById('room-type').value;
        const specialRequests = document.getElementById('special-requests').value;

        // Erstellen der formatierten Ausgabe
        const output = `
        <h2>Formular Auswertung</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Check-In Datum:</strong> ${checkInDate}</p>
        <p><strong>Check-Out Datum:</strong> ${checkOutDate}</p>
        <p><strong>Zimmertyp:</strong> ${roomType}</p>
        <p><strong>Besondere Wünsche:</strong> ${specialRequests}</p>
        `;

        // Anzeigen der Ausgabe im Dokument
        const outputContainer = document.querySelector('#output');
        
    })
})