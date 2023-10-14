var loc = "js/vega_json/line_def.vg.json"
vegaEmbed('#line_def', loc, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);