export function fetchCats() {
    const cats = fetch('http://localhost:4000/db');
    return {
      type: 'FETCH_CATS',
      cats
    };
};