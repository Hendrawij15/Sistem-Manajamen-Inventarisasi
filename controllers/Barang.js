import Barang from "../models/BarangModel.js";

export const listBarang = async (req, res) => {
  try {
    const response = await Barang.findAll({
      attributes: [
        "id",
        "nama",
        "no_BMN",
        "no_inventaris_tik",
        "kondisi_barang",
        "id_jenis",
        "tahun",
        "merk",
        "lokasi",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getBarangbyId = async (req, res) => {
  try {
    const response = await Barang.findOne({
      attributes: [
        "nama",
        "no_BMN",
        "no_inventaris_tik",
        "kondisi_barang",
        "id_jenis",
        "tahun",
        "merk",
        "lokasi",
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const tambahBarang = async (req, res) => {
  const {
    nama,
    no_BMN,
    no_inventaris_tik,
    kondisi_barang,
    id_jenis,
    tahun,
    merk,
    lokasi,
  } = req.body;
  try {
    await Barang.create({
      nama: nama,
      no_BMN: no_BMN,
      no_inventaris_tik: no_inventaris_tik,
      id_jenis: id_jenis, //mengambil dari tabel jenis
      kondisi_barang: kondisi_barang,
      tahun: tahun,
      merk: merk,
      lokasi: lokasi,
    });
    res.status(201).json({ msg: "Barang telah ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateBarang = async (req, res) => {
  const {
    nama,
    no_BMN,
    no_inventaris_tik,
    kondisi_barang,
    id_jenis,
    tahun,
    merk,
    lokasi,
  } = req.body;
  try {
    await Barang.update(
      {
        nama,
        no_BMN,
        no_inventaris_tik,
        kondisi_barang,
        id_jenis,
        tahun,
        merk,
        lokasi,
      },
      {
        where: {
          id: req.params.id, //id adalah field yanga ada di database
        },
      }
    );
    res.status(200).json({ msg: "Barang telah di Update" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteBarang = async (req, res) => {
  try {
    await Barang.destroy({
      where: {
        id: req.params.id, //menghapus hanya membutuhkan id
      },
    });
    res.status(200).json({ msg: "Barang Telah Dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
