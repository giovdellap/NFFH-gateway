const ROUTES_IMAGE = [
    {
        url: '/images',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://imageServer:9705",
            changeOrigin: false
        }
    }
]

exports.ROUTES_IMAGE = ROUTES_IMAGE;


