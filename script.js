// Listen for form submission
document.getElementById('compare-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const weight = document.getElementById('weight').value;
    const startLocation = document.getElementById('start-location').value;
    const destination = document.getElementById('destination').value;

    // Simulated data
    const courierResults = [
        { name: 'Delhivery', price: 'Rs 120', duration: '3-5 days' },
        { name: 'Blue Dart', price: 'Rs 125', duration: '2-4 days' },
        { name: 'Ekart', price: 'Rs 115', duration: '5-7 days' },
    ];

    // Get results container and clear old results
    const resultContainer = document.querySelector('.results-content');
    resultContainer.innerHTML = '';

    // Add results dynamically
    courierResults.forEach(result => {
        const resultCard = document.createElement('div');
        resultCard.classList.add('result-card');
        resultCard.innerHTML = `
            <h4>${result.name}</h4>
            <p>Starting Location: ${startLocation}</p>
            <p>Destination: ${destination}</p>
            <p>Weight: ${weight} kg</p>
            <p>Price: ${result.price}</p>
            <p>Duration: ${result.duration}</p>
        `;
        resultContainer.appendChild(resultCard);
    });

    // Show results section
    document.getElementById('comparison-results').classList.add('show');
});
