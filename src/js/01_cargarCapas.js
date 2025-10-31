export function cargarCapas(map) {
  const estilos = getComputedStyle(document.documentElement);

  map.on('load', () => {
     // === Capa de proyectos ===
    map.addSource('infra_source', {
      type: 'geojson',
      data: './src/assets/data/snp_2500.geojson'
    });

    map.addLayer({
      id: 'infra_layer',
      type: 'circle',
      source: 'infra_source',
      paint: {
        'circle-color': '#A3E4D7',
        'circle-radius': 4,
        'circle-stroke-width': 0.1,
        'circle-stroke-color': '#000000ff'
        }
    });











  })
}