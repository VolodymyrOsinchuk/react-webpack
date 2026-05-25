const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const multer = require("multer");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const config = require("../webpack.dev");
const compiler = webpack(config);

const user = require("./routes/user");
const product = require("./routes/product");
const auth = require("./routes/auth");

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, "../src/public");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8080"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", user);
app.use("/api/products", product);
app.use("/api/auth", auth);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.get(/.*/, (req, res) => {
  console.log("GET /*");
  res.status(200).sendFile(HTML_FILE);
});

mongoose.set("strictQuery", false);
// mongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("BD est bien connecté");
  })
  .catch((err) => {
    console.log("BDD n'est pas connecte à cause de error: " + err);
  });

app.listen(port, () => {
  console.log("Server started on port: " + port);
});

// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");

// const conf = require("./conf");
// const config = require("../webpack.dev");
// const compiler = webpack(config);

// const userRoutes = require("./routes/user");
// const productRoutes = require("./routes/product");

// const app = express();
// const port = conf.port;

// // Chemins pour les fichiers publics
// const DIST_DIR = path.join(__dirname, "../src/public");
// const HTML_FILE = path.join(DIST_DIR, "index.html");

// // Middleware de base
// app.use(express.static(DIST_DIR));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Utilisation de CORS
// app.use(cors()); // Ajoute des en-têtes CORS par défaut

// // Middleware Webpack Dev
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// // Routes API
// app.use("/user", userRoutes);
// app.use("/api", productRoutes);

// // Route catch-all pour servir l'index.html
// app.get("*", (req, res) => {
//   res.status(200).sendFile(HTML_FILE);
// });

// // Connexion à MongoDB avec gestion d'erreur
// mongoose.set("strictQuery", false); // Désactive la requête stricte pour éviter les avertissements
// const connectDB = async () => {
//   try {
//     await mongoose.connect(conf.mongoUrl);
//     console.log("BDD est bien connectée");
//   } catch (err) {
//     console.error("Erreur de connexion à la BDD : " + err.message);
//     process.exit(1); // Arrêter l'application si la connexion échoue
//   }
// };
// connectDB();

// // Gestion d'erreurs globales
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Une erreur interne est survenue." });
// });

// // Démarrage du serveur
// app.listen(port, () => {
//   console.log(`Serveur démarré sur le port : ${port}`);
// });
