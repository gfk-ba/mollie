Package.describe({
    summary: "Meteor package for the mollie payment service (https://mollie.nl/)",
    version: "1.0.0",
    name: "gfk-ba:mollie",
    git: "https://github.com/gfk-ba/mollie.git"
});

Package.onUse(function (api) {
    api.addFiles('mollie.js', 'server');
    api.export("Mollie", 'server');
});

Npm.depends({
    "mollie-api-node": "1.0.3"
});
