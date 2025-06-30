document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            // Set the year after footer is inserted
            var yearSpan = document.getElementById('footer-year');
            if(yearSpan) yearSpan.textContent = new Date().getFullYear();
        });
});
