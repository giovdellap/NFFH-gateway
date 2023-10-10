const ROUTES = [
    {
        url: '/customer',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://client-be:8081",
            changeOrigin: false
        }
    },
    {
        url: '/verify',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://auth:9701",
            changeOrigin: false
        }
    },
    {
        url: '/login',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://auth:9701",
            changeOrigin: false
        }
    },
    {
        url: '/signup',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://auth:9701",
            changeOrigin: false
        }
    }
]

exports.ROUTES = ROUTES;