module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5cbfa0ce35fc0d02fc9b6dec71627b20'),
  },
});
