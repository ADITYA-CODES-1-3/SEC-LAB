// Simulated weather data for demonstration
const weatherData = {
  London: { temp: 15, condition: 'Cloudy' },
  Paris: { temp: 18, condition: 'Sunny' },
  NewYork: { temp: 20, condition: 'Rainy' },
  Tokyo: { temp: 22, condition: 'Windy' }
};

// Promise-based function to simulate fetching weather data with delay and chance of failure
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Delay between 1s and 3s

    setTimeout(() => {
      // 20% chance to simulate failure
      if (Math.random() < 0.2) {
        reject(new Error(`Failed to fetch weather data for ${city}`));
      } else {
        const data = weatherData[city];
        if (data) {
          resolve({ city, ...data });
        } else {
          reject(new Error(`No weather data available for ${city}`));
        }
      }
    }, delay);
  });
}

// Async function to fetch weather sequentially for an array of cities
async function fetchSequential(cities) {
  console.log('Fetching weather data sequentially...');
  for (const city of cities) {
    try {
      const weather = await fetchWeather(city);
      console.log(`Success: ${city} - ${weather.temp}°C, ${weather.condition}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}

// Async function to fetch weather in parallel for an array of cities
async function fetchParallel(cities) {
  console.log('Fetching weather data in parallel...');
  const promises = cities.map(city => fetchWeather(city).then(
    data => ({ status: 'fulfilled', value: data }),
    err => ({ status: 'rejected', reason: err })
  ));

  const results = await Promise.all(promises);

  results.forEach(result => {
    if (result.status === 'fulfilled') {
      const { city, temp, condition } = result.value;
      console.log(`Success: ${city} - ${temp}°C, ${condition}`);
    } else {
      console.log(`Error: ${result.reason.message}`);
    }
  });
}

// Main async function to run the demo
async function main() {
  const cities = ['London', 'Paris', 'NewYork', 'Tokyo', 'Mars'];

  // Sequential fetching demo
  await fetchSequential(cities);

  console.log('----------------------------');

  // Parallel fetching demo
  await fetchParallel(cities);
}

main();
