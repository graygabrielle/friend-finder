module.exports = function (sequelize, DataTypes) {
    console.log("creating users");
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profilePic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
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
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return User;
}