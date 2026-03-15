import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const NewEmergencyRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    priority: "Low",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/emergency", formData);
      if (response.status === 201) {
        console.log(response.data);
        setFormData({
          title: "",
          description: "",
          location: "",
          priority: "Low",
          contact: "",
        });
        toast.success("Emergency request submitted successfully!");
        navigate("/emergency-requests");
      }
    } catch (error) {
      toast.error("Error adding emergency request. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa] font-['Inter',sans-serif]">
      <NavBar />

      <div className="min-w-6xl mx-auto mb-20 mt-32">
        <div className="bg-white p-8 rounded-lg shadow shadow-blue-50 border border-primary-100">
          <h1 className="text-2xl font-semibold text-black mb-6">
            Flag a New Emergency
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter the title of the emergency"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a brief description of the emergency"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                rows="4"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location of the emergency"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Priority Level
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Contact Information
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact details"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 cursor-pointer"
              >
                Submit Request
              </button>
              <button
                type="button"
                onClick={() => navigate("/emergency-requests")}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewEmergencyRequest;
