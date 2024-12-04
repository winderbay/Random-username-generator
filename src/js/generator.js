export function generateUsernames(options) {
  const {
    length,
    includeLetters,
    includeNumbers,
    includeSymbols,
    customWords
  } = options;

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*_-+=';
  
  let chars = '';
  if (includeLetters) chars += letters;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  const usernames = [];
  const wordsArray = customWords.split(' ').filter(word => word.length > 0);

  for (let i = 0; i < 5; i++) {
    let username = '';
    
    if (wordsArray.length > 0) {
      const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      username = randomWord;
      
      while (username.length < length) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    } else {
      for (let j = 0; j < length; j++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }

    usernames.push(username.slice(0, length));
  }

  return usernames;
}