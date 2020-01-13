The configuration in webpack.config.js is partially based in the example given here:
https://github.com/plotly/plotly-webpack
https://github.com/paulovieira/plotly-webpack

Execute webpack
```console
./node_modules/.bin/webpack --watch --display-chunks
```

The default bundle size is around 7.8mb.

1) in `node_modules/plotly.js/lib/index.js`, only require the modules/plot types that are really needed

This can bring the bundle size to around 2.5mb

2) in `node_modules/plotly.js/src/core.js`, comment the requires not used (example: "require('./components/fx')")

This can bring the bundle size to around 2.0mb

3) in `node_modules/plotly.js/src/plot_api/plot_api.js`, comment "require('../plots/polar/legacy')"

This can bring the bundle size to around 1.9mb	

TODO: use the webpack visualizer 
TODO: output as lib