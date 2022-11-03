const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require("../entities/user")

function getDB() {
    const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/ekspresi') // Example for postgres
    return sequelize
}

const sequelize = getDB()

function init() {
    User.init({
        // Model attributes are defined here
        id: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        firstname: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'User' // We need to choose the model name
      });
    
    
    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true

    const user = new User({ id: 1 });
    user.save()
}


module.exports = {init, getDB}