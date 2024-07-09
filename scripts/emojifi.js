function replaceTextWithEmojis(node) {
  // define the replacement rules
  const replacements = [
    //english
    { regex: /\bcats\b/gi, emoji: '🐈🐈‍' },
    { regex: /\bcat\b/gi, emoji: '🐈‍' },
    { regex: /\bkitty\b/gi, emoji: '🐈‍' },

    // italian
    { regex: /\bgatto\b/gi, emoji: '🐈‍' },
    { regex: /\bgatta\b/gi, emoji: '🐈‍' },
    { regex: /\bgatti\b/gi, emoji: '🐈🐈' },
    { regex: /\bgatte\b/gi, emoji: '🐈🐈‍' },
    { regex: /\bgattino\b/gi, emoji: '🐈‍' },
    { regex: /\bgattina\b/gi, emoji: '🐈‍' },
    { regex: /\bgattini\b/gi, emoji: '🐈🐈' },
    { regex: /\bgattine\b/gi, emoji: '🐈🐈‍' },

    // estonian
    { regex: /\bkass\b/gi, emoji: '🐈' },
    { regex: /\bkassid\b/gi, emoji: '🐈🐈‍' },
  ];

  // recursive function to handle text nodes
  function handleTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.nodeValue;
      replacements.forEach(({ regex, emoji }) => {
        text = text.replace(regex, emoji);
      });
      node.nodeValue = text;
    } else {
      node.childNodes.forEach((childNode) => handleTextNodes(childNode));
    }
  }

  // start processing from the given node
  handleTextNodes(node);
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    'p, h1, h2, h3, h4, li, th, td, span, em, div'
  );
  elements.forEach((element) => replaceTextWithEmojis(element));
});
