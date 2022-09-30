const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/connect-mysql')

sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = sequelize.sync()


// const pool=require('../config/connect-mysql')
//
// module.exports=class CityModal{
//
//     static getListUser(){
//         return new Promise(function(resolve, reject){
//             let sql=`select * from city`
//             pool.query(sql,(err,result)=>{
//                 if (err){
//                     reject(err);
//                 }
//                 resolve(result);
//             })
//         })
//     }
// }