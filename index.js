/* jshint node: true */
'use strict';

var Path = require('path');
var Funnel = require('broccoli-funnel');
var FashionConsultant = require('fashion-consultant');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-fashion-consultant',

  postprocessTree: function(type, inputTree) {
    if(type !== 'css') {
      return inputTree;
    }

    var srcCss = Funnel(inputTree, {
      include: ['**/' + this.app.name + '.css']
    });

    var docAssetsPath = Path.join(process.cwd(), 'doc-assets');
    var consultant = new FashionConsultant({
      inputPaths: srcCss,
      docAssetsPath: docAssetsPath
    });

    return MergeTrees([inputTree, consultant.rebuild()], {overwrite: true});
  }
};
