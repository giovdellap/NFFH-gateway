const ROUTES_DEBUG = [
    {
        url: '/farmer/login',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://farmer-be:9703",
            changeOrigin: false
        }
    },
    {
        url: '/farmer/signup',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://farmer-be:9703",
            changeOrigin: false
        }
    },

]

exports.ROUTES_DEBUG = ROUTES_DEBUG;