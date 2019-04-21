module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userGender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lookingFor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surveyAnswers: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true
        }
    })

    return User;
}