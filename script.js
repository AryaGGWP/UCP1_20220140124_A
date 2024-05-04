// Update greeting, date, and time dynamically
function updateDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var greeting = "Good ";

    if (hour >= 5 && hour < 12) {
        greeting += "Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting += "Afternoon";
    } else {
        greeting += "Evening";
    }

    var dateTimeStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    document.querySelector('.greeting').innerText = greeting;
    document.querySelector('.datetime').innerText = dateTimeStr;
}

// Update weather information with appropriate weather icon
function updateWeatherInfo() {
    // Mock data for weather (replace with actual weather API data)
    const weatherData = {
        location: 'Jakarta, Indonesia',
        condition: 'Clear sky',
        temperature: '30°C'
    };

    document.querySelector('.weather-location').innerText = weatherData.location;
    document.querySelector('.weather-condition').innerText = weatherData.condition;
    document.querySelector('.weather-temperature').innerHTML = weatherData.temperature + ' ' + getWeatherIcon(weatherData.condition);
}

// Function to get appropriate weather icon based on weather condition
function getWeatherIcon(condition) {
    switch (condition.toLowerCase()) {
        case 'clear sky':
            return '<i class="fas fa-sun"></i>';
        case 'partly cloudy':
            return '<i class="fas fa-cloud-sun"></i>';
        case 'cloudy':
            return '<i class="fas fa-cloud"></i>';
        case 'showers':
            return '<i class="fas fa-cloud-showers-heavy"></i>';
        default:
            return '';
    }
}

// Function to add reminders
function addReminder() {
    const reminderInput = document.querySelector('#reminder-input');
    const reminderText = reminderInput.value.trim();

    if (reminderText !== '') {
        const reminderList = document.querySelector('.reminder-list');
        const reminderItem = document.createElement('li');
        reminderItem.textContent = reminderText;
        reminderList.appendChild(reminderItem);

        // Clear input field after adding reminder
        reminderInput.value = '';
    }
}

// Event listener for adding reminder button
document.querySelector('#add-reminder-btn').addEventListener('click', addReminder);

// Initial calls to update date and time, weather, and reminders
updateDateTime();
updateWeatherInfo();
