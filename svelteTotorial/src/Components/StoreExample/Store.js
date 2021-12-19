import { writable } from "svelte/store"; // we import the function that will help us create a writible (write/ read) Svelte store
import { readable } from "svelte/store"; // we import the function that will help us create a redable (read only) store
import { derived } from "svelte/store";
// we create a store for our Counter components and export it; the initial value is 0
export const writibleCountStore = writable(0);

// we create a readable store and export it; other components are not able to update any values in this store
export const readableDateStore = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function () {
    clearInterval(interval);
  };
});

// we create a derived store (a s tore that derives its values from values in other stores)
const startDate = new Date();
export const derivedDateStore = derived(
  readableDateStore,
  ($readableDateStore) => {
    return Math.round(($readableDateStore - startDate) / 1000);
  }
);
