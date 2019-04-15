module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        surveyAnswers: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
        }
    })

    return User;
}