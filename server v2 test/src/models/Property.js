module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define('Property', {
        propertyId: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        propertyType: DataTypes.STRING,
        size: DataTypes.STRING,
        rentalPrice: DataTypes.STRING,
        imageURL: DataTypes.STRING,
        propertyWebpageURL: DataTypes.STRING,
        location: DataTypes.STRING

    })

    return Property
}