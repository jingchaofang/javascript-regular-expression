import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      { file: pkg.browser, format: 'umd', name: 'regular' },
      {
        file: 'dist/regular.iife.js',
        format: 'iife',
        name: 'regular',
        banner: '/* regular-library version ' + pkg.version + ' */',
        footer: '/* jingchaofang */'
      }
    ],
    watch: {
      include: 'src/**'
    }
  }
];