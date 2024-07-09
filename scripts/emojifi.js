function replaceTextWithEmojis() {
  const elements = document.querySelectorAll(
    'p, h1, h2, h3, h4, li, th, td, span, em, div'
  );
  elements.forEach(function (element) {
    element.innerHTML = element.innerHTML
      // english
      .replace(/\bcats\b/gi, '🐈🐈‍')
      .replace(/\bcat\b/gi, '🐈‍')
      .replace(/\bkitty\b/gi, '🐈‍')

      // italian
      .replace(/\bgatto\b/gi, '🐈‍')
      .replace(/\bgatta\b/gi, '🐈‍')
      .replace(/\bgatti\b/gi, '🐈🐈')
      .replace(/\bgatte\b/gi, '🐈🐈‍')
      .replace(/\bgattino\b/gi, '🐈‍')
      .replace(/\bgattina\b/gi, '🐈‍')
      .replace(/\bgattini\b/gi, '🐈🐈')
      .replace(/\bgattine\b/gi, '🐈🐈‍')

      // estonian
      .replace(/\bkass\b/gi, '🐈')
      .replace(/\bkassid\b/gi, '🐈🐈‍');
  });
}

addEventListener('DOMContentLoaded', (event) => {
  replaceTextWithEmojis();
});
