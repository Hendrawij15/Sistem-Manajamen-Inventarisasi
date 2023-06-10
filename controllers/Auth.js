import User from "../models/UsersModel.js"; //import dari model user
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email, //login berdasarkan email
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" }); //jika email tidak ditemukan
  const match = await argon2.verify(user.Password, req.body.Password); //verifikasi Password jika email ditemukan
  if (!match) return res.status(400).json({ msg: "Password Salah" }); // peringatan jika Password tidak cocok
  req.session.userId = user.uuid; //respon
  const uuid = user.uuid;
  const nama = user.nama;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, nama, email, role });//informasi login
};

export const STAFF = async (req, res) => {
  //Get User Login
  if (!req.session.userId) {
    //tidak ada USer
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "nama", "email", "role"], //yang akan ditampilkan
    where: {
      uuid: req.session.userId, //user ID ditemukan
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
};

export const LogOut = (req, res) => {
  //form Login
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat Logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
