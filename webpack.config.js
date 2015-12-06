var path = require("path");
const sassLoaders = [
'style-loader',
  'css-loader',
  'postcss-loader',
  'sass-loader?sourceMap?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, '')
];
module.exports = {
    entry :  {
        bundle : ['webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
           './docs/main.js'],
        vendor :['react','lodash','react-dom']
    },
    output: {
        filename: '[name].js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        path: path.join(__dirname, "dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot','babel'],
                include: [path.resolve(__dirname, "src"),
                path.resolve(__dirname, "docs")]
            }, {
                test: /\.scss$/,
                loader: sassLoaders.join("!")

            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }

}
