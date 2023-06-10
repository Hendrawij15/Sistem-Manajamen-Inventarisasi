import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"; //Koneksi ke database
import Jenis from "./JenisModel.js";

const { DataType } = Sequelize;

const Barang = db.define(
  "barang",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
        len: [0, 100], //panjang nama
      },
    },
    no_BMN: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    no_inventaris_tik: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    id_jenis: {
      type: DataTypes.INTEGER,
      allowNull: true, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    kondisi_barang: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    tahun: {
      type: DataTypes.INTEGER,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    merk: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
  },
  {
    freezeTableName: true,
  }
);
Jenis.hasMany(Barang);
Barang.belongsTo(Jenis, { foreignKey: "id_jenis" });

export default Barang;
