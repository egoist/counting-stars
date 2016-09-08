# Counting Stars [![Build Status](https://img.shields.io/circleci/project/egoist/counting-stars/master.svg?style=flat-square)](https://circleci.com/gh/egoist/counting-stars/tree/master)

Counting stars like you are One Republic.

## Installation

CDN: https://unpkg.com/counting-stars

```bash
npm install counting-stars
```

## Example

```javascript
// default settings
{ chars = ['★', '☆'],
  rating = 0,
  tag = 'span',
  attrs = {}
} = {}
// usage
import countingStars from 'counting-stars';
countingStars({
  rating: 4
});
// use your favorite chars
countingStars({
  chars: [
    '<i class="fa fa-star"></i>',   // full star
    '<i class="fa fa-star-o"></i>', // half star
  ],
  rating: 3.5
});
// wrap star with tag and give it attributes
countingStars({
  attrs: {
    'onClick': 'handleClick'
  },
  rating: 3.5
});
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
