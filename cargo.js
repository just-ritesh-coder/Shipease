document.addEventListener("DOMContentLoaded", () => {
    const cargoForm = document.getElementById("cargo-form");
    const resultsPanel = document.getElementById("cargo-results-panel");
    const closeResultsBtn = document.getElementById("close-results");
    const resultsContent = document.querySelector(".results-content");

    // Mock data for cargo comparison results
    const cargoServices = [
        { name: "Air Cargo Express", price: "Rs 20000", duration: "2 Days" },
        { name: "Sea Freight", price: "Rs 15000", duration: "7 Days" },
        { name: "Road Transport Co.", price: "Rs 10000", duration: "3 Days" },
    ];

    // Show results panel
    const showResultsPanel = () => {
        resultsPanel.style.right = "0";
    };

    // Hide results panel
    const hideResultsPanel = () => {
        resultsPanel.style.right = "-100%";
    };

    // Handle form submission
    cargoForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    document.getElementById("compare-cargo").addEventListener("click", () => {
        // Clear previous results
        resultsContent.innerHTML = "";

        // Append new results dynamically
        cargoServices.forEach((service) => {
            const result = document.createElement("div");
            result.innerHTML = `
                <p><strong>${service.name}</strong></p>
                <p>Price: ${service.price}</p>
                <p>Duration: ${service.duration}</p>
                <hr>
            `;
            resultsContent.appendChild(result);
        });

        // Show the results panel
        showResultsPanel();
    });

    // Close results panel
    closeResultsBtn.addEventListener("click", hideResultsPanel);
});
