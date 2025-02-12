const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    age: { type: Number },
    gender: { type: String }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;