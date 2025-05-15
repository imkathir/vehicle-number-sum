'use strict';

module.exports = function(deployTarget) {
  return {
    build: {
      environment: deployTarget === 'production' ? 'production' : 'development',
    },
    git: {
      gitRemoteUrl: 'https://github.com/imkathir/vehicle-number-sum.git',
      branch: 'gh-pages',
      commitMessage: 'Deployed via ember-cli-deploy',
    },
  };
};
// 