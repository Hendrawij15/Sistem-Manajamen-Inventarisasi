import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"; //Koneksi ke database
import Barang from "./BarangModel.js";
import Users from "./UsersModel.js";

const { DataType } = Sequelize;

const Transaksi = db.define(
  "transaksi",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    id_jenis: {
      type: DataTypes.INTEGER,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    id_barang: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    no_inventaris: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    tanggal_peminjaman: {
      type: DataTypes.DATE,
      allowNull: true, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: false, // tidak boleh bernilai 0 dan kosong
      },
    },
    tanggal_pengembalian: {
      type: DataTypes.DATE,
      allowNull: true, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: false, // tidak boleh bernilai 0 dan kosong
      },
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    status_peminjaman: {
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
Users.hasMany(Transaksi, {
  foreignKey: "id_user",
});
Barang.hasMany(Transaksi, {
  foreignKey: "id_barang",
});
Transaksi.belongsTo(
  Barang,
  { foreignKey: "id_jenis" },
  { foreignKey: "id_barang" },
  { foreignKey: "no_inventaris_tik" }
);
Transaksi.belongsTo(Users, {
  foreignKey: "id_user",
});

export default Transaksi;
