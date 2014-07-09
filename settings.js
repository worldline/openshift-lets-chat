var config = {

    // Server
    host: process.env.OPENSHIFT_NODEJS_IP || '', // Not required
    port: process.env.OPENSHIFT_NODEJS_PORT || 5000,

    // Registration
    disable_registration: false,

    // HTTPS
    /***
    https: {
        port: 8000, // Regular port will redirect to this
        key: 'key.pem',
        cert: 'certificate.pem'
    },
    ***/

    // Database
    // db_host: 'localhost',
    // db_port: 27017,
    // db_name: 'letschatbro',
    // db_user: '',
    // db_password: '',

    // Overrides the above settings (helpful for heroku)
    db_url: process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME,

    // Security
    // Please change these!
    cookie_secret: process.env.OPENSHIFT_APP_UUID || 'KeyBoard Cat',
    password_salt: process.env.OPENSHIFT_APP_UUID || 'Hello. Yes, This is Dog',

    // Misc
    debug: false,
    media_url: '/media',
    uploads_dir: 'uploads',
    plugins_dir: 'plugins',

    // Plugins
    plugins: {
        'emotes': {
            file: 'emotes.js', // You should use file.local.js
            url: 'emotes.json'
        },
        'replacements': {
            file: 'replacements.js',
            url: 'replacements.json'
        }
    },

    // Allowed file types
    allowed_file_types: [
        'image/jpeg',
        'image/png',
        'image/gif',
    ],

    // s3 credentials
    /***
    s3: {
        accessKeyId: '',
        secretAccessKey: '',
        region: '',
        bucket: ''
    },
    ***/

}

module.exports = config;
