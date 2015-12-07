import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: './counting-stars.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: 'countingStars'
};
