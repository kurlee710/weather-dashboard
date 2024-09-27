import * as fs from "fs/promises";
import * as path from "path";

class City {
  constructor(public id: number, public name: string) {}
}

class HistoryService {
  private filePath = path.join(__dirname, "searchHistory.json");

  private async read(): Promise<City[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data).map((city: any) => new City(city.id, city.name));
    } catch (error) {
      if (error instanceof Error && (error as any).code === "ENOENT") {
        return [];
      }
      throw error;
    }
  }

  private async write(cities: City[]): Promise<void> {
    await fs.writeFile(this.filePath, JSON.stringify(cities, null, 2), "utf-8");
  }

  async getCities(): Promise<City[]> {
    return await this.read();
  }

  async addCity(name: string): Promise<void> {
    const cities = await this.read();
    const id = cities.length ? cities[cities.length - 1].id + 1 : 1;
    const newCity = new City(id, name);
    cities.push(newCity);
    await this.write(cities);
  }

  async removeCity(id: number): Promise<void> {
    let cities = await this.read();
    cities = cities.filter((city) => city.id !== id);
    await this.write(cities);
  }
}

export default new HistoryService();
