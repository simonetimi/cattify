function replaceTextWithEmojis() {
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, li');
  elements.forEach(function (element) {
    element.innerHTML = element.innerHTML
      .replace(/\bcats\b/gi, '🐈🐈‍')
      .replace(/\bcat\b/gi, '🐈‍')
      .replace(/\bkitty\b/gi, '🐈‍')
      .replace(/\bgatto\b/gi, '🐈‍')
      .replace(/\bgatta\b/gi, '🐈‍')
      .replace(/\bgatti\b/gi, '🐈🐈')
      .replace(/\bgatte\b/gi, '🐈🐈‍')
      .replace(/\bkass\b/gi, '🐈')
      .replace(/\bkassid\b/gi, '🐈🐈‍');
  });
}

addEventListener('DOMContentLoaded', (event) => {
  replaceTextWithEmojis();
});
