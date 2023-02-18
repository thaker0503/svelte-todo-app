import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(localStorage.getItem('todos')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
    if (browser) {
        localStorage.setItem('todos', JSON.stringify(value));
    }
});

