document.addEventListener("DOMContentLoaded", function() {
    fetch('https://us-central1-campus-383006.cloudfunctions.net/curious-counter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitCount').innerText = data.count;
        })
        .catch(error => console.error('Error:', error));
});
