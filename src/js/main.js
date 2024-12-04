import { generateUsernames } from './generator.js';
import { setupForm } from './components/form.js';
import { updateResults } from './components/results.js';

document.addEventListener('DOMContentLoaded', () => {
  setupForm((options) => {
    const usernames = generateUsernames(options);
    updateResults(usernames);
  });
});