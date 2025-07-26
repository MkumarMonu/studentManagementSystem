const mongoose = require("mongoose");

// Define the Profile schema
const parentsDetailsSchema = new mongoose.Schema({
	fatherName: {
		type: String,
	},
	motherName: {
		type: String,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
	},
		address: {
		type: String,
		trim: true,
	},

});

// Export the Profile model
module.exports = mongoose.model("ParentsDetails", parentsDetailsSchema);
