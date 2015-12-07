export default function ({
  chars = ['★', '☆'],
  rating = 0,
  tag = 'span',
  attrs = {}
} = {}) {
  if (Object.keys(attrs).length > 0) {
    let attr = ''
    for (let i in attrs) {
      attr += ` ${i}="${attrs[i]}"`
    }
    chars = chars.map(char => `<${tag}${attr}>${char}</${tag}>`)
  }
  const positivePoints = chars[0].repeat(parseInt(rating));
  const afterDot = (rating % 1 >= 0.5) ? chars[1] : '';
  return positivePoints + afterDot;
};
