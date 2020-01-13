The configuration in webpack.config.js is partially based in the example given here:
https://github.com/plotly/plotly-webpack
https://github.com/paulovieira/plotly-webpack

Execute webpack
```console
./node_modules/.bin/webpack --watch --display-chunks
```

The default bundle size is around 7.8mb (development mode).

Steps to reduce the size:

1) edit `node_modules/plotly.js/lib/index.js`

Only require the modules/plot types that are really needed. This can bring the bundle size to around 2.5mb

2) edit `node_modules/plotly.js/src/core.js`

Comment the modules that don't aren't being used (example: "require('./components/fx')"). This can bring the bundle size to around 2.0mb

3) edit `node_modules/plotly.js/src/plot_api/plot_api.js`

Comment "require('../plots/polar/legacy')"

This can bring the bundle size to around 1.9mb	


## Alternative approach to commenting the plotly.js source code 

In webpack.config.js we can use 'null-loader' for the modules we want to ignore.

TODO: 
- use the webpack visualizer 
- output as lib