import { expect } from 'chai';
import countingStars from './src/index';

describe('main', () => {
  it('test 5 stars', done => {
    expect(countingStars({
      rating: 5
    })).to.equal('★★★★★');
    done();
  });
  it('test 4.5 stars', done => {
    expect(countingStars({
      rating: 4.5
    })).to.equal('★★★★☆');
    done();
  });
  it('test 3.2 stars', done => {
    expect(countingStars({
      rating: 3.2
    })).to.equal('★★★');
    done();
  });
});
