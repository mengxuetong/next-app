/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'], // 需要转换的属性，这里选择转换所有属性
      exclude: false,
      minPixelValue: 1,
      mediaQuery: true
    }
  },
};
export default config;
