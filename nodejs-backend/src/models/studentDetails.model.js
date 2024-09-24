
    module.exports = function (app) {
        const modelName = 'student_details';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            stuName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
courseName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
DOB: { type: Date, required: false },
contactNo: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };