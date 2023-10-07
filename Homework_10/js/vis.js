var loc = "js/chlor_map.vg.json"
vegaEmbed('#for_lev_map', loc, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);