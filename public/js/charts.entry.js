// CSS

require('bootstrap.css')
require('font-awesome.css')
require('bootstrap-chosen.css')
require('nv.d3.css')
require('../css/chart.css')

// JS

require('babel-polyfill');
require('./libs/modernizr-custom');
window.jQuery = require('jquery');
window.d3 = require('./libs/d3old');
require('./libs/nv.d3');
window.d3v4 = require('d3');
window._ = require('underscore');
_.extend(window, require('./libs/saveSvgAsPng'));
window.s = require('underscore.string');
window.Backbone = require('./libs/backbone');
require('./libs/bootstrap.min');
require('./libs/chosen.jquery');
window.colorbrewer = require('./libs/colorbrewer');
require('./libs/jquery.lazyloadxt.extra');
window.async = require('./libs/async');
window.Fuse = require('fuse.js');
require('./libs/innersvg');

window.owid = require('./owid').default;
require('./app/owid.bounds');
owid.dataflow = require('./app/owid.dataflow').default;
require('./app/owid.colorbrewer');
require('preact/devtools');
require('./app/constants');
require('./app/App.Utils');
require('./app/App.Models.ChartModel');
require('./app/App.Models.MapModel');
require('./app/owid.models.mapdata');
require('./app/App.Models.VariableData');
require('./app/App.Models.ChartData');
require('./app/App.Models.Colors');
require('./app/App.Views.Chart.Header');
owid.component = {};
owid.component.footer = require('./app/SourcesFooter').default;
require('./app/owid.view.tooltip');
require('./app/owid.view.scaleSelectors');
require('./app/owid.view.axis');
require('./app/owid.view.axisBox');
require('./app/owid.view.timeline');
require('./app/owid.view.scatter');
require('./app/owid.viz.scatter');
require('./app/owid.view.entitySelect');
owid.view.controlsFooter = require('./app/ControlsFooter').default;
require('./app/App.Views.Chart.Legend');
owid.component.slopeChart = require('./app/owid.component.slopeChart').default;
require('./app/App.Views.Chart.ChartTab');
require('./app/DataTab');
require('./app/SourcesTab');

require('./app/owid.data.world');
require('./app/App.Views.Chart.Map.Legend');
owid.component.mapTab = require('./app/owid.component.mapTab').default;

require('./app/App.Views.ChartURL');
require('./app/App.Views.Export');
require('./app/App.Views.DebugHelper');
owid.chart = require('./app/owid.chart').default;