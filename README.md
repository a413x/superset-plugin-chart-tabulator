# superset-plugin-chart-tabulator

This is an example table chart plugin for [Superset](https://superset.apache.org/). It based on [Tabulator](https://tabulator.info/) library and uses [react-tabulator](https://github.com/ngduc/react-tabulator). The plugin has been built using the [Superset Yeoman Generator](https://www.npmjs.com/package/@superset-ui/generator-superset).

### Usage

To build the plugin, run the following commands:

```
npm ci
npm run build
```

Alternatively, to run the plugin in development mode (=rebuilding whenever changes are made), start the dev server with the following command:

```
npm run dev
```

To add the package to Superset, go to the `superset-frontend` subdirectory in your Superset source folder (assuming both the `superset-plugin-chart-tabulator` plugin and `superset` repos are in the same root directory) and run
```
npm i -S ../../superset-plugin-chart-tabulator
```

If your Superset plugin exists in the `superset-frontend` directory and you wish to resolve TypeScript errors about `@superset-ui/core` not being resolved correctly, add the following to your `tsconfig.json` file:

```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

You may also wish to add the following to the `include` array in `tsconfig.json` to make Superset types available to your plugin:

```
"../../types/**/*"
```

Finally, if you wish to ensure your plugin `tsconfig.json` is aligned with the root Superset project, you may add the following to your `tsconfig.json` file:

```
"extends": "../../tsconfig.json",
```

After this edit the `superset-frontend/src/visualizations/presets/MainPreset.js` and make the following changes:

```js
import { SupersetPluginChartTabulator } from 'superset-plugin-chart-tabulator';
```

to import the plugin and later add the following to the array that's passed to the `plugins` property:
```js
new SupersetPluginChartTabulator().configure({ key: 'superset-plugin-chart-tabulator' }),
```

After that the plugin should show up when you run Superset, e.g. the development server:

```
npm run dev-server
```
