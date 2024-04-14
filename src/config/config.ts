export enum PAGES {
  allBreweries = "/",
  favoriteBreweries = "/favorite",
}

export const pages = [
  {
    name: "Breweries",
    path: PAGES.allBreweries,
  },
  {
    name: "Favorite",
    path: PAGES.favoriteBreweries,
  },
];

export const searchOptions = [
  {
    name: "City",
    value: "by_city",
    instructions:
      "For the parameters, you can use underscores or url encoding for spaces. ",
  },
  {
    name: "Distance",
    value: "by_dist",
    instructions:
      "Sort the results by distance from an origin point, denoted by latitude,longitude. for example: 32.88313237,-117.1649842 ",
  },
  {
    name: "Ids",
    value: "by_ids",
    instructions:
      "Comma-separated list of brewery IDs. for example: 701239cb-5319-4d2e-92c1-129ab0b3b440,06e9fffb-e820-45c9-b107-b52b51013e8f ",
  },
  {
    name: "name",
    value: "by_name",
    instructions:
      "For the parameters, you can use underscores or url encoding for spaces. for example: san_diego",
  },
  {
    name: "state",
    value: "by_state",
    instructions:
      " Full state name is required; no abbreviations. For the parameters, you can use underscores or url encoding for spaces. for example: california",
  },
  {
    name: "postal code",
    value: "by_postal",
    instructions:
      "May be filtered by basic (5 digit) postal code or more precisely filtered by postal+4 (9 digit) code.   If filtering by postal+4 the search must include either a hyphen or an underscore. for example: 92101",
  },
  {
    name: "type",
    value: "by_type",
    instructions:
      "Filter by type of brewery.\n\nMust be one of:\n\nmicro - Most craft breweries. For example, Samual Adams is still considered a micro brewery.\nnano - An extremely small brewery which typically only distributes locally.\nregional - A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.\nbrewpub - A beer-focused restaurant or restaurant/bar with a brewery on-premise.\nlarge - A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)\nplanning - A brewery in planning or not yet opened to the public.\nbar - A bar. No brewery equipment on premise. (deprecated)\ncontract - A brewery that uses another brewery's equipment.\nproprietor - Similar to contract brewing but refers more to a brewery incubator.\nclosed - A location which has been closed.",
  },
];
