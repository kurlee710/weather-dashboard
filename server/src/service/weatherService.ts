// Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;
  longitude: number;
}

// Define a class for the Weather object
class Weather {
  temperature: number;
  humidity: number;
  description: string;
  coordinates: Coordinates;

  constructor(
    temperature: number,
    humidity: number,
    description: string,
    coordinates: Coordinates
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.description = description;
    this.coordinates = coordinates;
  }
}

// Complete the WeatherService class
class WeatherService {
  private baseURL: string;
  private apiKey: string;
  private cityName: string;
  private coordinates: Coordinates;

  constructor() {
    this.baseURL =
      process.env.API_BASE_URL || "https://api.openweathermap.org/data/2.5";
    this.apiKey = process.env.API_KEY || "";
    this.cityName = "";
    this.coordinates = { latitude: 0, longitude: 0 };
  }
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchLocationData(query: string): Promise<any> {
    const url = `${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch location data");
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      throw new Error("Failed to fetch location data");
    }
  }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  private destructureLocationData(locationData: any): Coordinates {
    const { lat: latitude, lon: longitude } = locationData;
    return { latitude, longitude };
  }
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}
