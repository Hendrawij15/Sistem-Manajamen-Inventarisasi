import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"; //Koneksi ke database

const { DataType } = Sequelize;

const Users = db.define(
  "users",
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
        len: [3, 100], //panjang nama
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
        isEmail: true, //verifikasi email
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    Password: {
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

export default Users;
