var webpack = require('webpack');

module.exports ={
    entry : [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'   
    ]    
};