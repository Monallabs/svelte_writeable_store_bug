import './app.postcss';
import App from './App.svelte';
import { justpyComponents, setJustpyComponents } from './store_jpcomponents';
import { mount } from 'svelte';

export {App,  setJustpyComponents};
export function mountApp(target) {
       return mount(App, { target: target });
}