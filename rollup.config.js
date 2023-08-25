import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'index.js',
    output: {
      file: 'index.js',
      format: 'umd',
      name: 'max-npm-quality'
    },
    context: 'window',
    plugins: [commonjs()]
  },
  {
    input: 'index.d.ts',
    output: {
      file: 'index.d.ts'
    },
    plugins: [dts()]
  }
]
