export const filterPlaces = (value, places) => {
    const filterValue = value.toLowerCase();
    return places.filter(p => p.toLowerCase().includes(filterValue));
}

