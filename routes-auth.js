const ROUTES_AUTH = [
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
        url: '/client/login',
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
        url: '/client/signup',
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
    },
    {
        url: '/verifyToken',
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
]

exports.ROUTES_AUTH = ROUTES_AUTH;


