const { sequelize } = require('./index');


const tableObj = {
    content: {
        type: DataTypes.String,
        allowNull: true
    }
};

const lets_talk = sequelize.define('lets_talk', tableObj);

sequelize.sync({force: true});

lets_talk.create({
    content: "lets talk test content"
}).then((lets_talk) => {
    console.log(`lets talk id: ${lets_talk.id}`)
}).catch((error) => {
    console.log(`An error occured, could not create lets_talk table`)
})
