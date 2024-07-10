import { Document, Schema, SchemaTypes, Types, model } from "mongoose";

// Defining Schema which corresponds to document in MongoDB //
const personSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide a firstname."]
  }, lastName: {
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
    postalcode: {
        type: String,
        required: [true, "Please provide a postcode."]
    },
    state: {
        type: String,
        required: [true, "Please provide a city name."]
    },
    company: {
      type: SchemaTypes.ObjectId,
      ref: 'Company',
      required: true,
      default: 'Unknown'
    },
    timestamps: true
  }
});

// Define Model //
const PersonModel = model("Person", personSchema);

// Define the interfaces for the raw document //
// Adding two seperate interfaces because the documents have nested data (starting with nested data)// 
 export interface IAddress {
  street: string,
  number: number,
  postalcode: string,
  city: string,
  state: string
}

export interface IPerson {
  firstName: string,
  lastName: string,
  address: IAddress,
  company: Types.ObjectId | string
}

export default PersonModel

// We strongly recommend against using this approach, its support will be dropped in the next major version as it causes major performance issues.
// const Person = model<IPerson>("Person", personSchema);

// export default mongoose.models.Person || model("Person", personSchema);

// const Person =  model("Person", personSchema);
// module.exports = Person;


// dev.to/get_pieces/building-a-fullstack-application-with-nextjs-and-mongodb-427d

// <Person>

// mongoosejs.com/docs/schematypes.html
// Look up Virtuals to add functions to the schema, like searching or printing certain details! Very helpful.


// Example of how to work with Schema and model: // WHERE DOES THE IT KEYWORD GO?
// const person = mongoose.model("Person", personSchema);

// const newPerson = new person;
// person.firstName = ''
// person.lastName = ''
// person.address.street = '',
// { firstName, lastName, address: { street, number, pc, city, state } } = this // DOES THIS WORK?

// Values of null and undefined are not cast!

// Create a new Person Object: 
// const newPerson = new Person({ firstName, lastName, addres: { street, number, pc, city, state } : PersonPropType })
// Add new Person object to the MongoDB
// await newPerson.save();
// Find a single person:
// const findPerson = await Person.findOne({'add filter here})
// console.log(findPerson);

// USe the create instead of save to combine the above two actions of adding data to a collection!
// const newPerson = new Person.create({ add all the data })
// return the object : console.log(newPerson)

// const findPerson = await Person.findById(this.id?).exec();
// Filter only certain data from a search:
// add a second optional parameter to the search (this.id?), "key(values) you want to find")

// Check if a document already exists:
// const person = Person.exists({ key: value })
// console.log()

// Referenced data - linked from company in this case:
// When adding a new Person to the database instead of adding company name as a string add company._id. ??
// await finding all people in collection database. use the .populate("company") option to display all company data on these fields
// Think I need to work with a map statement when building the list of people on screen and then string the above command to the map statement so it will add it to all people



/// Getting started with MongoDB & Mongoose ODM Library on YT

// .model function creates a copy of schema make sure all paths and hooks are added before calling it!
// Stopped watching YT at 19 minutes

// https://mongoosejs.com/docs/typescript/schemas.html

// Mongoose can automatically infer the document type from your schema definition as follows. We recommend relying on automatic type inference when defining schemas and models.

// I understand that this was set with raw models in mind. But the code looks outdated or different from the documentation
// To work with raw data import inferRawDocType and work with that.

// The ts.config.json file needs to have strict : true enabled otherwise it will give issues: Checked it is set correctly
// I added timestamps true and removed the other option I had: 
// createdAt: {
//   type: Date,
//   default: () => Date.now(),
//   immutable: true
// }





