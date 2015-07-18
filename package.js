Package.describe({
  name: 'invertedbit:mediator',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for the Mediator pattern',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/InvertedBit/mediator',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mediator.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('invertedbit:mediator');
  api.addFiles('mediator-tests.js');
});
