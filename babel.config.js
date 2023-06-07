module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.native.ts', '.native.tsx', '.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '#assets': ['./app/assets'],
          '#components': ['./app/components'],
          '#constants': ['./app/constants'],
          '#hooks': ['./app/hooks'],
          '#models': ['./app/models'],
          '#navigation': ['./app/navigation'],
          '#redux': ['./app/redux'],
          '#screens': ['./app/screens'],
          '#services': ['./app/services'],
          '#themes': ['./app/themes'],
          '#types': ['./app/types'],
          '#utils': ['./app/utils'],
        },
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
    'babel-plugin-macros',
  ],
};
