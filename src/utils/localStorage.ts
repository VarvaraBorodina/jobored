export const addToLocalStorage = (key: string, value: unknown) => {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  };
  
export const getFromLocalStorage = (key: string): unknown => {
    const stringifyValue = localStorage.getItem(key);
    if(stringifyValue) {
      const value = JSON.parse(stringifyValue);
      return value;
    } else {
      return null;
    }
};

export const addToFavorites = (key: number) => {
  const favorites = localStorage.getItem('favorites');
  let newFavorites: number[] = [];

  if(favorites) {
    newFavorites = [...JSON.parse(favorites)];
  }

  newFavorites.push(key);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  return newFavorites;
}

export const deleteFromFavorites = (key: number) => {
  const favorites = localStorage.getItem('favorites');
  let newFavorites: number[] = [];

  if(favorites) {
    newFavorites = JSON.parse(favorites).filter((fav_key:number) => fav_key!== key);
  }

  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  return newFavorites;
}

export const getFavorites = ():number[] => {
  const favorites = localStorage.getItem('favorites');
    if(favorites) {
      return JSON.parse(favorites);
    } else {
      localStorage.setItem('favorites', JSON.stringify([]));
      return [];
    }
}