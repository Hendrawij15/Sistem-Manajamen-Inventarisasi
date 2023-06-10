import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"; //berfungsi untuk menggenerate tabel secara otomatis
import UserRoute from "./routes/UserRoute.js";
import JenisRoute from "./routes/JenisRoute.js";
import BarangRoute from "./routes/BarangRoute.js";
import PeminjamanRoute from "./routes/PeminjamanRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SequelizeStore from "connect-session-sequelize"; //membuat tetap login saat server down
dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

//(async () => {
// await db.sync();
//})();

app.use(
  session({
    //Mendefeniskan Session
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto", //menggunakan HTTP/HTTPS//(false/true)
    },
  })
);

app.use(
  cors({
    credentials: true, //
    origin: "http://localhost:3000", //berfungsi untuk memberikan domain mengakses API
  })
);

app.use(express.json()); // agar bisa menerima data dalam format JSON
app.use(UserRoute); //menggunakan maddleware
app.use(JenisRoute);
app.use(BarangRoute);
app.use(PeminjamanRoute);
app.use(AuthRoute);

//store.sync(); // SINKRON TABEL KE DATABASE

app.listen((process.env.PORT = 3000), () => {
  console.log("Server Running...");
});
