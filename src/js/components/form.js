export function setupForm(onSubmit) {
  const form = document.getElementById('generator-form');
  const lengthSlider = document.getElementById('length');
  const lengthValue = document.getElementById('length-value');

  lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const options = {
      length: parseInt(lengthSlider.value),
      includeLetters: document.getElementById('include-letters').checked,
      includeNumbers: document.getElementById('include-numbers').checked,
      includeSymbols: document.getElementById('include-symbols').checked,
      customWords: document.getElementById('custom-words').value
    };

    onSubmit(options);
  });
}