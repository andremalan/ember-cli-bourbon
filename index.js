/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-bourbon',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForStyles: function() {
    var bourbonPath = path.join(this.project.bowerDirectory, 'bourbon', 'core');
    var bourbonTree = new Funnel(this.treeGenerator(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return bourbonTree;
  }
};
