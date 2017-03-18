import { ajax } from 'rxjs/observable/dom/ajax';

// About Page API methods
export const fetchAboutContent = () => ajax.getJSON('/api/aboutContent');
