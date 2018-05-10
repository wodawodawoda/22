const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://mateusz:databasepassword@ds119110.mlab.com:19110/blog-mern-22',
  port: process.env.PORT || 8000,
};

export default config;
