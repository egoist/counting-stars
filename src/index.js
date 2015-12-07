export default function ({
  chars = ['★', '☆'],
  rating = 0
} = {}) {
  const positivePoints = chars[0].repeat(parseInt(rating));
  const afterDot = (rating % 1 >= 0.5) ? chars[1] : '';
  return positivePoints + afterDot;
};
