document.addEventListener('DOMContentLoaded', function () {
  const phrases = [
      "wake up nani",
      "rm moloch.exe",
      "boot wrappr.wtf",
      "𝒜𝓊𝓉𝑜𝓃𝑜𝓂𝒾𝓏𝒾𝓃𝑔 𝐸𝓋𝑒𝓇𝓎𝓉𝒽𝒾𝓃𝑔"
  ];

  let phraseDiv = document.getElementById('phrase');
  let currentPhraseIndex = 0;

  function displayNextPhrase() {
      if (currentPhraseIndex < phrases.length) {
          let span = document.createElement('span');
          span.textContent = phrases[currentPhraseIndex];

          if (phrases[currentPhraseIndex] === "𝒜𝓊𝓉𝑜𝓃𝑜𝓂𝒾𝓏𝒾𝓃𝑔 𝐸𝓋𝑒𝓇𝓎𝓉𝒽𝒾𝓃𝑔") {
              span.classList.add('special-font-size');
          }

          span.classList.add('loading-dots');

          phraseDiv.appendChild(span);
          phraseDiv.appendChild(document.createElement('br'));

          currentPhraseIndex++;

          if (currentPhraseIndex < phrases.length) {
              setTimeout(displayNextPhrase, 1);
          } else {
              setTimeout(() => {
                  span.classList.remove('loading-dots');
                  displayNextLine();
              }, 1);
          }
      }
  }

  setTimeout(displayNextPhrase, 1);
});
