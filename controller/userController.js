import user from '../model/userModel.js'

export const create = async (req, res) => {
    try {
        const userData = new user(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }
        const saveData = await userData.save();
        res.status(200).json({ msg: "User Data is saved.", data: saveData })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getAllData = async (req, res) => {
    try {
        const usersData = await user.find();
        if (!usersData) return res.status(404).json({ msg: "Users Data not Found.." })
        res.status(200).json({ msg: "All User Data is Here", usersData })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const getUserDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const userDataExits = await user.findById(id);
        if (!userDataExits) return res.status(404).json({ msg: "Users Data not Found by Perticular Id" });
        res.status(200).json({ msg: "User Data is here by Id", userDataExits })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


export const UpdateUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const userDataExits = await user.findById(id);
        if (!userDataExits) return res.status(404).json({ msg: "Users Data not Found by Perticular Id" });
        const updatedData=await user.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({ msg: "User Data is updated successfully"})
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const DeleteUserData = async (req, res) => {
    try {
        const id = req.params.id;
        const userDataExits = await user.findById(id);
        if (!userDataExits) return res.status(404).json({ msg: "Users Data not Found by Perticular Id" });
        await user.findByIdAndDelete(id)
        res.status(200).json({ msg: "User Data is deleted successfully"})
    } catch (err) {
        res.status(500).json({ error: err })
    }
}