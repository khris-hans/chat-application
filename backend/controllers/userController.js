import User from '../models/userModel.js';

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUser._id } }).select("name username avatar gender"); // get all users except the logged in user
        
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error getting the users", error.message);
        res.status(500).json({ error: "Internal server error" });
        
    }
}