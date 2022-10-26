const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newDb")
    .then(() => { console.log("connection made succesfully") })
    .catch((err) => { console.log(err) });


//defining schema
const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    marks: Number,
    smart: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }

});
//creating class (model: use to crud operation)
const Students = new mongoose.model('Student', newSchema);

//create document in simple way
const addDocs = async () => {
    try {

        const studOne = new Students({
            name: "krushna",
            age: 21,
            marks: 93,
            smart: true,

        })
        const studTwo = new Students({
            name: "Shraddha",
            age: 20,
            marks: 94,
            smart: true,

        })
        const studThree = new Students({
            name: "Sanket",
            age: 21,
            marks: 92,
            smart: true,

        })
        const studFour = new Students({
            name: "Chakradhar",
            age: 21,
            marks: 90,
            smart: true,

        })

        const result = await Students.insertMany([studOne, studTwo, studThree, studFour]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

addDocs();

const getDocument = async () => {
    const result = await Students.find({ name: "krushna" }).select({ age: 1 });
    console.log(result)

}

getDocument();

const updateDoc = async (_id) => {
    try {
        // const result = await Students.updateOne({ _id }, {
        //     $set: {
        //         name: "Sankya"
        //     }
        // })
        const result = await Students.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Sanky"
            }
        })
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}


updateDoc('63580bf11d1da813ba7b5123');

const deleteDoc = async (_id) => {
    try {

        const result = await Students.deleteOne({ _id });
        console.log("deleted succesfully");
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }

}


deleteDoc('63580bf11d1da813ba7b5123')
