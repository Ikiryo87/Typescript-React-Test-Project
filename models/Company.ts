import mongoose from "mongoose";
const { Schema, model } = mongoose;

// export interface Company extends mongoose.Document {
//   name: string,
//   address: {
//     street: string,
//     number: number,
//     city: string,
//     pc: string,
//     state: string
//   };
// };

/* Companyschema will correspond to a collection in the MongoDB database. */

const CompanySchema = new Schema({
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

const Company = model("Company", CompanySchema);
module.exports = mongoose.models.Company || Company;