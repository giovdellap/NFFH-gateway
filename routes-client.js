const ROUTES_CLIENT = [
    {
        url: '/customer',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://client-be:9702",
            changeOrigin: false
        }
    },
    {
        url: '/provaclient',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://client-be:9702",
            changeOrigin: false
        }
    },
]

exports.ROUTES_CLIENT = ROUTES_CLIENT;