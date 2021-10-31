const button = document.getElementById('btn');
//dynamic import
button.addEventListener('click', async () => {
  const module = await import('./file.js');
  module.hello();
});
