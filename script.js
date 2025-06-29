const alertData = [
    { type: 'warning', title: 'Tornado Warning', location: 'Springfield County', description: 'A confirmed tornado is on the ground. Take shelter now!' },
    { type: 'watch', title: 'Severe Thunderstorm Watch', location: 'Shelbyville Area', description: 'Conditions are favorable for the development of severe thunderstorms with large hail and damaging winds.' },
    { type: 'advisory', title: 'Flood Advisory', location: 'Capital City River Valley', description: 'Minor flooding in low-lying and poor drainage areas is expected. Do not drive through flooded roadways.' },
    { type: 'warning', title: 'Hurricane Warning', location: 'Coastal Metropolis', description: 'Hurricane Giga is approaching. Evacuate low-lying areas immediately.' },
    { type: 'watch', title: 'Flash Flood Watch', location: 'Creek County', description: 'Heavy rainfall may result in flash flooding. Be prepared to move to higher ground.' },
    { type: 'warning', title: 'Blizzard Warning', location: 'Northern Territories', description: 'Heavy snow and strong winds will create whiteout conditions. Travel is not advised.' },
    { type: 'advisory', title: 'Dense Fog Advisory', location: 'Central Valley', description: 'Visibility reduced to one-quarter mile or less. Use caution while driving.' },
    { type: 'watch', title: 'Winter Storm Watch', location: 'Mountain Pass', description: 'Potential for heavy snow and ice accumulation. Prepare for possible power outages.' },
    { type: 'advisory', title: 'Heat Advisory', location: 'Desert Bluffs', description: 'Temperatures expected to reach 110°F. Stay hydrated and avoid strenuous outdoor activity.' },
    { type: 'warning', title: 'Wildfire Warning', location: 'Pine Ridge Forest', description: 'A large wildfire is spreading rapidly. Evacuate the area immediately.' },
    { type: 'advisory', title: 'Wind Advisory', location: 'High Plains', description: 'Sustained winds of 30 mph with gusts up to 50 mph expected.' }
];

const alertContainer = document.querySelector('.alert-container');

function generateAlerts() {
    alertContainer.innerHTML = '';

    // Determine how many alerts to show (e.g., 2 to 4)
    const numberOfAlerts = Math.floor(Math.random() * 3) + 2;

    // Create a shuffled copy of the data to get random alerts
    const shuffledAlerts = [...alertData].sort(() => 0.5 - Math.random());
    const selectedAlerts = shuffledAlerts.slice(0, numberOfAlerts);

    // Create and append HTML for each selected alert
    selectedAlerts.forEach(alertInfo => {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${alertInfo.type}`; // e.g., 'alert warning'

        alertDiv.innerHTML = `
            <div class="alert-header">
                <h3>${alertInfo.title}</h3>
            </div>
            <div class="alert-body">
                <p><strong>Location:</strong> ${alertInfo.location}</p>
                <p>${alertInfo.description}</p>
            </div>
        `;
        alertContainer.appendChild(alertDiv);
    });
}

// Generate alerts when the page loads
generateAlerts();

// Set an interval to refresh the alerts every 5 seconds (5000 milliseconds)
setInterval(generateAlerts, 5000);

console.log("Weather alert system initialized and updating every 5 seconds.");