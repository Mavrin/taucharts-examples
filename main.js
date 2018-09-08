const librariesPaths = {
    'd3': 'https://cdn.jsdelivr.net/npm/d3@5.7.0/dist/d3',
    'taucharts': 'https://cdn.jsdelivr.net/npm/taucharts@2.6.1/dist/taucharts',
    'taucharts-tooltip': 'https://cdn.jsdelivr.net/npm/taucharts@2.6.1/dist/plugins/tooltip',
    'topojson-client': 'https://cdn.jsdelivr.net/npm/topojson-client@3.0.0/dist/topojson-client'
};

const map = {
    '*': {}
};

[
    'd3-array',
    'd3-axis',
    'd3-brush',
    'd3-color',
    'd3-format',
    'd3-geo',
    'd3-scale',
    'd3-selection',
    'd3-shape',
    'd3-time',
    'd3-time-format',
    'd3-transition',
    'd3-quadtree'
].forEach((path) => {
    map['*'][path] = 'd3';
});

requirejs.config({
    paths: librariesPaths,
    map: map
});

require(['taucharts', 'taucharts-tooltip'], (Taucharts, tooltip) => {
    //console.log(tooltip);
    const chart = new Taucharts.Chart({
        type: 'scatterplot',
        x: 'x',
        y: 'y',
        plugins: [tooltip.default()],
        data: [
            {
                x: 0.5,
                y: 1
            },
            {
                x: 1,
                y: 2
            }
        ]
    });
    chart.renderTo('#placeholder');
});