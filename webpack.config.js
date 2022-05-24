//permitira saber donde esta ubiado nuestro proyecto
const path = require('path');

//instancias
const HtmlWebpackPlugin = require('html-webpack-plugin');

//objeto donde se añadira cada configuracion necesaria para el proyecto
module.exports =  {
    //donde esta el púnto de entrada de la aplicacion
    entry: './src/index.js',
    //donde vivira el proyecto una vez poreparado
    output: {
        //dir del proyecto
        path: path.resolve(__dirname, 'dist'),
        //nombre del empaquetado
        filename: 'bundle.js',
    },
    mode: 'development',
    //extensiones y como trabajar
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //reglas de loaders y plugins
    module: {
        rules: [
            {
                //probar los elemenytos con los que se estaran trabajando
                test: /\.(js|jsx)$/,
                //excluir lo que no queremos que lea
                exclude: /node_modules/,
                use: {
                    //loadres
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //indicando donde esta el template
            template: './public/index.html',
            //como se llamara una vez preparado
            filename: './index.html'
        }),
    ]
}