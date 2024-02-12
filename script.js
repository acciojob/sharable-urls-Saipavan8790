// your code here
const form = document.getElementById('urlForm');
const urlText = document.getElementById('url');

form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission

	// Get input field values
	const name = document.getElementById('name').value;
	const year = document.getElementById('year').value;

	// Update url text with query string
	urlText.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
});


