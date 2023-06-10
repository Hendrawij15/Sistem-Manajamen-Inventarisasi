import User from "../models/UsersModel.js";
import argon2 from "argon2";

export const listUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["id", "uuid", "nama", "email", "role"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ["uuid", "nama", "email", "role"],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const tambahUser = async (req, res) => {
  const { nama, email, Password, confPassword, role } = req.body;
  console.log(req.body);
  if (Password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password tidak cocok" });
  const hashPassword = await argon2.hash(Password);
  try {
    await User.create({
      nama: nama,
      email: email,
      Password: hashPassword,
      confPassword: confPassword,
      role: role,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const { nama, email, Password, confPassword, role } = req.body;
  let hashPassword;
  if (Password === "" || Password === null) {
    hashPassword = user.Password; //ambil password dari database
  } else {
    hashPassword = await argon2.hash(Password); //hash password
  }
  if (Password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan ConfirmPassword tidak cocok" });
  try {
    await User.update(
      {
        nama: nama,
        email: email,
        Password: hashPassword,
        role: role,
      },
      {
        where: {
          id: user.id, //id adalah field yanga ada di database
        },
      }
    );
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id, //id yang dikirim user
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await User.destroy({
      where: {
        id: user.id, //menghapus hanya membutuhkan id
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
