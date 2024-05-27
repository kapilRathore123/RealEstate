let properties = JSON.parse(localStorage.getItem('properties')) || [];

function addProperty() {
    const area = document.getElementById('area').value;
    const place = document.getElementById('place').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const hospital = document.getElementById('hospital').value;
    const college = document.getElementById('college').value;

    const property = {
        id: new Date().getTime(),
        area,
        place,
        bedrooms,
        bathrooms,
        hospital,
        college
    };

    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));
    displayProperties();
    document.getElementById('propertyForm').reset();
}

function displayProperties() {
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
            <button onclick="editProperty(${property.id})">Edit</button>
            <button onclick="deleteProperty(${property.id})">Delete</button>
        `;
        propertyList.appendChild(propertyDiv);
    });
}

function editProperty(id) {
    const property = properties.find(p => p.id === id);
    document.getElementById('area').value = property.area;
    document.getElementById('place').value = property.place;
    document.getElementById('bedrooms').value = property.bedrooms;
    document.getElementById('bathrooms').value = property.bathrooms;
    document.getElementById('hospital').value = property.hospital;
    document.getElementById('college').value = property.college;

    deleteProperty(id);
}

function deleteProperty(id) {
    properties = properties.filter(p => p.id !== id);
    localStorage.setItem('properties', JSON.stringify(properties));
    displayProperties();
}
