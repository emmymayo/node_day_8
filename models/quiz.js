module.exports = (sequelize, DataTypes) => {
    const quiz = sequelize.define(
      "quiz",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type: DataTypes.ENUM("short_answer", "multiple_choice", "multiple_selection_choice", "long_text", "description", "true_false"),
        question: DataTypes.STRING,
        correct_answer: DataTypes.STRING,
        created_at: DataTypes.DATEONLY,
        updated_at: DataTypes.DATE,
      },
      {
        timestamps: true,
        freezeTableName: true,
        tableName: "quiz",
      },
      {
        underscoredAll: false,
        underscored: false,
      }
    );

    quiz.associate = (db)=>{
        db.quiz.hasMany(db.answer);
    }
  
    return quiz;
  };