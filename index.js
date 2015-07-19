var $bs;

exports.getBootstrap = function() {
    if (!$bs) {
        var jquery = require('jquery-detached-2.1.4');
        var decorator = require('./decorator');
        
        $bs = jquery.newJQuery();        
        decorator.addToJQuery($bs);
    }
    return $bs;
};

exports.clear = function() {
    $bs = undefined;
};