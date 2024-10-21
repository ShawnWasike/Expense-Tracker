// Function to fetch and display educational resources
async function fetchResources() {
    try {
        const response = await fetch('http://localhost:3000/api/resources');
        const resources = await response.json();

        const resourceList = document.getElementById('resource-list');
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.textContent = `${resource.Name} (${resource.Type})`;
            resourceList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching resources:', error);
    }
}

// Function to fetch and display regions
async function fetchRegions() {
    try {
        const response = await fetch('http://localhost:3000/api/regions');
        const regions = await response.json();

        const regionList = document.getElementById('region-list');
        regions.forEach(region => {
            const listItem = document.createElement('li');
            listItem.textContent = `${region.Name} (${region.Type})`;
            regionList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching regions:', error);
    }
}

// Fetch data when the page loads
window.onload = () => {
    fetchResources();
    fetchRegions();
};
