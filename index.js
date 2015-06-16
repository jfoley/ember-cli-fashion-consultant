/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var FashionConsultant = require('fashion-consultant');

module.exports = {
  name: 'ember-cli-fashion-consultant',

  postprocessTree: function(type, inputTree) {
    if(type !== 'css') {
      return inputTree;
    }

    var srcCss = Funnel(inputTree, {
      exclude: ['**/vendor.css']
    });

    var consultant = new FashionConsultant({
      inputPaths: srcCss,
    });

    return consultant.rebuild();
  }
};
