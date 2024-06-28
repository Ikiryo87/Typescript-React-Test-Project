import mongoose from "mongoose";

export interface People extends mongoose.Document {
  firstName: string,
  lastName: string,
  address: {
    street: string,
    number: number,
    city: string,
    pc: string,
    state: string
  };
};

/* Peopleschema correspond to a collection in the MongoDB database. */
const PeopleSchema = new mongoose.Schema<People>({
  firstName: {
    type: String,
    required: [true, "Please provide a firstname or initial(s)."]
  },
  lastName: {
    type: String,
    required: [true, "Please provide a lastname."]
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
    postcode: {
        type: String,
        required: [true, "Please provide a postcode."]
    },
    state: {
        type: String,
        required: [true, "Please provide a city name."]
    }
  }
});

export default mongoose.model<People>("Person", PeopleSchema);
// mongoose.models.People ||