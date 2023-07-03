module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@/shared': './src/shared',
          '@/entities': './src/entities',
          '@/features': './src/features',
          '@/widgets': './src/widgets',
          '@/pages': './src/pages',
          '@/processes': './src/processes',
          '@/app': './src/app',
        },
      },
    ],
  ],
};
