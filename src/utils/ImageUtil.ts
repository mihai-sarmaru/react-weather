export const getRandomWeatherImage = (weatherId: number) => {

    // Default weather image
    let weatherImage = 'images/default.jpg';

    const randomImageNumber = Math.floor(Math.random() * Math.floor(10));

    // Thunderstorm
    if (weatherId >= 200 && weatherId < 300) {
        weatherImage = `images/thunderstorm/${randomImageNumber}.jpg`;
    }

    // Drizzle
    if (weatherId >= 300 && weatherId < 400) {
        weatherImage = `images/rain/${randomImageNumber}.jpg`;
    }

    // Rain
    if (weatherId >= 500 && weatherId < 600) {
        weatherImage = `images/rain/${randomImageNumber}.jpg`;
    }

    // Snow
    if (weatherId >= 600 && weatherId < 700) {
        weatherImage = `images/snow/${randomImageNumber}.jpg`;
    }

    // Atmosphere
    if (weatherId >= 700 && weatherId < 800) {
        weatherImage = `images/fog/${randomImageNumber}.jpg`;
    }

    // Clear
    if (weatherId === 800) {
        weatherImage = `images/sunny/${randomImageNumber}.jpg`;
    }

    // Cloudy
    if (weatherId > 800 && weatherId < 900) {
        weatherImage = `images/cloudy/${randomImageNumber}.jpg`;
    }

    return weatherImage;
}

export const saveUnsplashOption = (option: boolean) => {
    localStorage.setItem('unsplash', JSON.stringify(option));
}

export const getUnsplashOption = (): boolean => {
    const option = localStorage.getItem('unsplash');
    return option !== null ? JSON.parse(option) : false; 
}

export const getUnsplashImageLink = () => {
    return 'https://source.unsplash.com/random';
}