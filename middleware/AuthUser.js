import User from "../models/UsersModel.js";

export const verifyUser = async (req, res, next) => {
  //proteksi user
  if (!req.session.userId) {
    //tidak ada USer
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId, //user ID ditemukan
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.userId = user.id; //jika user ditemukan karena membutuhkan id
  req.role = user.role;
  next();
};

export const admin = async (req, res, next) => {
  //proteksi user
  const user = await User.findOne({
    where: {
      uuid: req.session.userId, //user ID ditemukan
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "Dilarang masuk" });
  next();
};
