import Medicine from "../models/medicines.js";

// Add a Medicine
export const AddMedicine = async (req, res) => {
    const {name,details,location,image,price,quantity,availability} = req.body;

    try {
        if (!name ||!details ||!location ||!image ||!price ||!quantity || availability === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const medicine = await Medicine.create({name, details, location, image, price, quantity, availability});

        res.status(201).json({
            message: "Medicine added successfully",
            medicine
        })
    } catch (error) {
        res.status(500).json({ message: "Error while Adding Medicine" });
        console.error("Error while Adding Medicine",error);
    }
}

// Get All Medicines
export const GetMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find({});

        res.status(200).json({
            message: "Medicines fetched successfully",
            medicines
        })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching Medicines" });
        console.error("Error while fetching Medicines",error);
    }
}

// Get a Single Medicine
export const GetMedicineById = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);

        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json({
            message: "Medicine fetched successfully",
            medicine
        })
    } catch (error) {
        res.status(500).json({ message: "Error while fetching Medicine" });
        console.error("Error while fetching Medicine",error);
    }
}

// Update a Medicine
export const UpdateMedicine = async (req, res) => {
    const { id } = req.params;
    const { name, details, location, image, price, quantity, availability } = req.body;

    try {
        if (!name ||!details ||!location ||!image ||!price ||!quantity || availability === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const medicine = await Medicine.findByIdAndUpdate(
            id,
            { name, details, location, image, price, quantity, availability },
            { new: true }
        );

        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json({
            message: "Medicine updated successfully",
            medicine
        })
    } catch (error) {
        res.status(500).json({ message: "Error while updating Medicine" });
        console.error("Error while updating Medicine", error);
    }
}

// Delete a Medicine
export const DeleteMedicine = async (req, res) => {
    const { id } = req.params;

    try {
        const medicine = await Medicine.findByIdAndDelete(id);

        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json({
            message: "Medicine deleted successfully"
        })
    } catch (error) {
        res.status(500).json({ message: "Error while deleting Medicine" });
        console.error("Error while deleting Medicine", error);
    }
}
