const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'RemoteButton',
          remotes: {
            // RemoteButton: `ComponentLibrary@http://localhost:3002/remoteEntry.js`,
          },
          filename: 'remoteEntry.js',
          shared: {},
          extraOptions: {}
        })
    );

    return config;
  },
  experimental:{appDir:true}
};
