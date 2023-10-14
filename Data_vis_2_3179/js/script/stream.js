var loc = "js/vega_json/stream.vg.json"
vegaEmbed('#stream', loc, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);