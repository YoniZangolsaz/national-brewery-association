import { makeAutoObservable } from "mobx";

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  page = 1;
  searchValue = "";
  searchType = "";

  setPage(page: number) {
    this.page = page;
  }

  setSearch(searchValue: string, searchType: string) {
    this.searchValue = searchValue;
    this.searchType = searchType;
  }

  // TODO clear
  clear() {
    this.page = 1;
    this.searchValue = "";
    this.searchType = "";
  }
}

const searchStore = new SearchStore();

export default searchStore;
