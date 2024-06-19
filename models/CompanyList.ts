import mongoose from "mongoose";

export interface Companies extends mongoose.Document {
  name: string,
  address: {
    street: string,
    number: number,
    city: string,
    pc: string,
    state: string
  };
};

/* Taskschema will correspond to a collection in your MongoDB database. */
const CompaniesSchema = new mongoose.Schema<Companies>({
  name: {
    type: String,
    required: [true, "Please provide a company name."],
    maxlength: [60, "Name cannot exceed 60 characters"],
  },
  address: {
    street: {
        type: String,
        required: [true, "Please provide a streetname."],
        maxlength: [60, "Name cannot exceed 60 characters."]
    },
    number: {
        type: Number,
        required: [true]
    },
    city: {
        type: String,
        required: [true, "Please provide a city name."]
    },
    pc: {
        type: String,
        required: [true, "Please provide a postcode."]
    },
    state: {
        type: String,
        required: [true, "Please provide a city name."]
    }
  }
});

export default mongoose.models.Companies ||
  mongoose.model<Companies>("Company", CompaniesSchema);