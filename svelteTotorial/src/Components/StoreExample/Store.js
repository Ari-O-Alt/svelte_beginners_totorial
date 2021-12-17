import { writable } from "svelte/store"; // we import the function that will help us create a Svelte store

export const countStore = writable(0); // we create a store for our Counter components and export it; the initial value is 0
