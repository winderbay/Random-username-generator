export function updateResults(usernames) {
  const resultsList = document.getElementById('results');
  
  resultsList.innerHTML = usernames.map(username => `
    <div class="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
      <span class="font-medium">${username}</span>
      <button 
        onclick="navigator.clipboard.writeText('${username}')"
        class="text-primary hover:text-primary/80 transition-colors"
      >
        Copy
      </button>
    </div>
  `).join('');
}