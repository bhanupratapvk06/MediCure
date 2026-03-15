import RareInjectionAssistance from "../models/rareInjection.js";

// Create a new rare injection
export const createRareInjection = async (req, res) => {
  const { name, quantity, urgency, location, contact } = req.body;

  try {
    if (!name || !quantity || !urgency || !location || !contact) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newRareInjection = await RareInjectionAssistance.create({
      name,
      quantity,
      urgency,
      location,
      contact
    });

    return res.status(201).json({
      message: "New Rare Injection Created",
      newRareInjection
    });
  } catch (error) {
    res.status(500).json({ message: "New Rare Injection Error", error });
    console.error(error);
  }
};

// Get all rare injections
export const getRareInjections = async (req, res) => {
  try {
    const rareInjections = await RareInjectionAssistance.find({});
    return res.status(200).json({ rareInjections });
  } catch (error) {
    res.status(500).json({ message: "Get Rare Injections Error", error });
    console.error(error);
  }
};

// Get a rare injection by ID
export const getRareInjectionById = async (req, res) => {
  const { id } = req.params;

  try {
    const rareInjection = await RareInjectionAssistance.findById(id);
    if (!rareInjection) {
      return res.status(404).json({ message: "Rare Injection not found" });
    }
    return res.status(200).json({ rareInjection });
  } catch (error) {
    res.status(500).json({ message: "Get Rare Injection Error", error });
    console.error(error);
  }
};

// Update a rare injection by ID
export const updateRareInjection = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, urgency, location, contact } = req.body;

  try {
    const rareInjection = await RareInjectionAssistance.findByIdAndUpdate(
      id,
      { name, quantity, urgency, location, contact },
      { new: true }
    );

    if (!rareInjection) {
      return res.status(404).json({ message: "Rare Injection not found" });
    }

    return res.status(200).json({ rareInjection });
  } catch (error) {
    res.status(500).json({ message: "Update Rare Injection Error", error });
    console.error(error);
  }
};

// Delete a rare injection by ID
export const deleteRareInjection = async (req, res) => {
  const { id } = req.params;

  try {
    const rareInjection = await RareInjectionAssistance.findByIdAndDelete(id);

    if (!rareInjection) {
      return res.status(404).json({ message: "Rare Injection not found" });
    }

    return res.status(200).json({ message: "Rare Injection deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete Rare Injection Error", error });
    console.error(error);
  }
};
