module.exports = function (conf) {

    conf.registerPreset('bem', require('../presets/bem.json'));
    conf.registerPreset('canonical-bem', require('../presets/canonical-bem.json'));

};
