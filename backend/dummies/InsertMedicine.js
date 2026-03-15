import Medicine from "../models/medicines.js";
import RareInjectionAssistance from "../models/rareInjection.js";
import medicines from "./dummy.medicines.js";
import rareMedicines from "./dummy.rareinjections.js";

export const insertMedicines = async () => {
  try {
    await Medicine.deleteMany({});
    await Medicine.insertMany(medicines);
    console.log("Medicines seeded successfully!");
  } catch (err) {
    console.error("Error seeding medicines:", err);
    throw err;
  }
};

export const insertRareMedicines = async () => {
  try {
    await Medicine.deleteMany({ name: { $in: rareMedicines.map(m => m.name) } });
    await Medicine.insertMany(rareMedicines);
    console.log("Rare Medicines seeded successfully!");
  } catch (err) {
    console.error("Error seeding rare medicines:", err);
    throw err;
  }
};

export const seedAll = async () => {
  await insertMedicines();
  await insertRareMedicines();
};
