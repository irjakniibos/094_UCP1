module.exports = (sequelize, DataTypes) => {
const buku = sequelize.define("buku", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true
},
judul: {
type: DataTypes.STRING,
},
deskripsi: {
type: DataTypes.STRING,
},
pengarang: {
type: DataTypes.STRING,
},
tahunTerbit: {
type: DataTypes.INTEGER,
},
bidang:{
type: DataTypes.STRING,
}
});
return buku;
}