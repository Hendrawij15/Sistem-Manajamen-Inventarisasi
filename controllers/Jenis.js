import Jenis from "../models/JenisModel.js";

export const listJenis = async (req, res) => {
  try {
    const response = await Jenis.findAll({
      attributes: ["id", "nama"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getJenisbyId = async (req, res) => {
  try {
    const response = await Jenis.findOne({
      attributes: ["id", "nama"],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const tambahJenis = async (req, res) => {
  const { nama } = req.body;
  try {
    await Jenis.create({
      nama: nama
    });
    res.status(201).json({msg:"Jenis Barang telah ditambahkan" });
  }catch (error) {
    res.status(500).json({msg: error.message });
  }
};

export const updateJenis = async (req, res) => {
  const { nama } = req.body;
  try {
    await Jenis.update(
      {
        nama,
      },
      {
        where: {
          id: req.params.id, //id adalah field yanga ada di database
        },
      }
    );
    res.status(200).json({ msg: " Jenis Barang telah di Update" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteJenis = async (req, res) => {
  try {
    await Jenis.destroy({
      where: {
        id: req.params.id, //menghapus hanya membutuhkan id
      },
    });
    res.status(200).json({ msg: "Barang Telah Dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
