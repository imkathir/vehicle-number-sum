'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},

    'git': {
      gitRemoteUrl: 'https://github.com/imkathir/vehicle-number-sum.git',  // <- THIS IS THE KEY IT WANTS
      branch: 'gh-pages',
      commitMessage: 'Deployed from ember-cli-deploy'
    }
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
