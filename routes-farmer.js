const ROUTES_FARMER = [
    {
        url: '/area',
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
        url: '/products',
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
        url: '/product',
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
        url: '/allproducts',
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
        url: '/modifyproduct',
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
        url: '/farmer',
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
        url: '/farmerFull',
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
        url: '/farmerLight',
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

exports.ROUTES_FARMER = ROUTES_FARMER;