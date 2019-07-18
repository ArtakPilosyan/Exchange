const CSS = [
    { folder: 'tether', file: 'tether/dist/css/tether.min.css' },

    { folder: 'bootstrap', file: 'bootstrap/dist/css/bootstrap.min.css' },
    { folder: 'bootstrap', file: 'bootstrap/dist/css/bootstrap.min.css.map' },

    { folder: 'font-awesome', file: 'font-awesome/css/font-awesome.min.css' },
    { folder: 'fonts', file: 'font-awesome/fonts/' },
];

const JS = [
    { folder: 'jquery', file: 'jquery/dist/jquery.min.js' },
    { folder: 'jquery', file: 'jquery/dist/jquery.min.map' },

    { folder: 'jquery-mousewheel', file: 'jquery-mousewheel/jquery.mousewheel.js' },

    { folder: 'popper', file: 'popper.js/dist/umd/popper.min.js' },
    { folder: 'popper', file: 'popper.js/dist/umd/popper.min.js.map' },

    { folder: 'tether', file: 'tether/dist/js/tether.min.js' },

    { folder: 'bootstrap', file: 'bootstrap/dist/js/bootstrap.min.js' },
];

module.exports = [...JS, ...CSS];