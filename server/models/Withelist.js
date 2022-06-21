const Whitelist = sequelize.define('int_whitelist', {
    identifier: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    ip: {
        type: Sequelize.STRING,
        allowNull: false
    }
})