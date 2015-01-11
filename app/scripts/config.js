require.config({
  // make bower_components more sensible
  // expose jquery
  paths: {
    'bower_components': '../bower_components',
    'jquery': '../bower_components/jquery/jquery'
  },
  map: {
    '*': {
    }
  }
});

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first
// require.config({}) found in this file
require.config({
  map: {
    '*': {
    }
  }
});

if (!window.requireTestMode) {
  require(['main'], function(){ });
}
