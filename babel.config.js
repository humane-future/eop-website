module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript',
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 12,
          },
        },
      ],
    ],
    plugins: [],
  };
};
