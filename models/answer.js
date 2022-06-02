module.exports = (sequelize, DataTypes) => {
    const answer = sequelize.define(
      "answer",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "quiz",
                key:   "id"
            }
        },
        answer: DataTypes.STRING,
        created_at: DataTypes.DATEONLY,
        updated_at: DataTypes.DATE,
      },
      {
        timestamps: true,
        freezeTableName: true,
        tableName: "answer",
      },
      {
        underscoredAll: false,
        underscored: false,
      }
    );

    answer.associate = (db)=>{
        db.answer.belongsTo(db.quiz);
    }
  
    return answer;
  };

  