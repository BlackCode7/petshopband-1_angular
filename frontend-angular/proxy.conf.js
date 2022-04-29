/** Referência ---> https://www.youtube.com/watch?v=ATjHgBh8dWg&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=16 */
const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8090/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;