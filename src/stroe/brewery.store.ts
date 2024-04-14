import { makeAutoObservable } from "mobx";

class BreweryStore {
  constructor() {
    makeAutoObservable(this);
  }

  favoriteBreweries: BreweryType[] = [];

  addFavoriteBrewery(brewery: BreweryType) {
    this.favoriteBreweries.push(brewery);
  }

  removeFavoriteBrewery(brewery: BreweryType) {
    this.favoriteBreweries = this.favoriteBreweries.filter(
      (b) => b.id !== brewery.id
    );
  }

  isFavorite(id: number) {
    return this.favoriteBreweries.some((b) => b.id === id);
  }

  get favoriteBreweriesCount() {
    return this.favoriteBreweries.length;
  }

  addOrRemoveFavorite(brewery: BreweryType) {
    if (this.isFavorite(brewery.id)) {
      this.removeFavoriteBrewery(brewery);
    } else {
      this.addFavoriteBrewery(brewery);
    }
  }

  rateBrewery(brewery: BreweryType, rating: number) {
    const index = this.favoriteBreweries.findIndex((b) => b.id === brewery.id);
    this.favoriteBreweries[index].rating = rating;
  }

  unlikeAll() {
    this.favoriteBreweries = [];
  }
}

const breweryStore = new BreweryStore();

export default breweryStore;
