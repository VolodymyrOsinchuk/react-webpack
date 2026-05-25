const conf = {
  port: process.env.PORT || 3000,
  mongoUrl:
    process.env.MONGODB_URL ||
    "mongodb+srv://lbpuser:5rxRhgBBxaugD4TG@cluster0.rnkyh.mongodb.net/test?retryWrites=true&w=majority",
};

module.exports = conf;
