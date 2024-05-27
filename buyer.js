document.addEventListener('DOMContentLoaded', displayProperties);

function displayProperties() {
    const properties = JSON.parse(localStorage.getItem('properties')) || [];
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <p><strong>Area:</strong> ${property.area} sq ft</p>
            <p><strong>Place:</strong> ${property.place}</p>
            <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
            <p><strong>Hospital Nearby:</strong> ${property.hospital}</p>
            <p><strong>College Nearby:</strong> ${property.college}</p>
            <button onclick="showSellerDetails(${property.id})">I'm Interested</button>
        `;
        propertyList.appendChild(propertyDiv);
    });
}

function showSellerDetails(id) {
    const properties = JSON.parse(localStorage.getItem('properties')) || [];
    const property = properties.find(p => p.id === id);
    const sellerInfo = document.getElementById('sellerInfo');

    // Example seller details (these would normally come from the property object or another source)
    
    const sellerDetails = `
        <p><strong>Seller Name:</strong> Chetan </p>
        <p><strong>Seller Email:</strong> chetan@example.com</p>
        <p><strong>Phone Number:</strong> (91) 65-5346</p>
    `;

    sellerInfo.innerHTML = sellerDetails;
    document.getElementById('seller-details').style.display = 'block';
}

function applyFilters() {
    const place = document.getElementById('filterPlace').value.toLowerCase();
    const minBedrooms = parseInt(document.getElementById('filterBedrooms').value) || 0;
    const minBathrooms = parseInt(document.getElementById('filterBathrooms').value) || 0;

    const properties = JSON.parse(localStorage.getItem('properties')) || [];
    const filteredProperties = properties.filter(property => {
        return (
            property.place.toLowerCase().includes(place) &&
            property.bedrooms >= minBedrooms &&
            property.bathrooms >= minBathrooms
        );
    });

    displayFilteredProperties(filteredProperties);
}

function displayFilteredProperties(properties) {
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = '';

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <p><strong>Area:</strong> ${property.area} sq ft</p>
            <p><strong>Place:</strong> ${property.place}</p>
            <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
            <p><strong>Hospital Nearby:</strong> ${property.hospital}</p>
            <p><strong>College Nearby:</strong> ${property.college}</p>
            <button onclick="showSellerDetails(${property.id})">I'm Interested</button>
        `;
        propertyList.appendChild(propertyDiv);
    });
}
