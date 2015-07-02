/* jshint node: true */
'use strict';

var Path = require('path');
var Funnel = require('broccoli-funnel');
var FashionConsultant = require('fashion-consultant');

module.exports = {
  name: 'ember-cli-fashion-consultant',

  postprocessTree: function(type, inputTree) {
    if(type !== 'css') {
      return inputTree;
    }

    var docAssetsPath = Path.join(process.cwd(), 'doc-assets');
    var consultant = new FashionConsultant({
      inputPaths: inputTree,
      docAssetsPath: docAssetsPath
    });

    return consultant.rebuild();
  }
};
