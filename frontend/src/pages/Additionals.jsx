import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  MdOutlineLocationOn,
  MdOutlinePriorityHigh,
  MdOutlineMedicalServices,
} from "react-icons/md";

import { CheckCircle, MapPin } from "lucide-react";
import axios from "../utils/axios";

const VerifiedSuppliers = () => {
  const navigate = useNavigate();

  const suppliers = [
    {
      name: "Global Medicos",
      location: "New York, USA",
      contact: "+1 212-555-0198",
      verified: true,
    },
    {
      name: "CarePlus Pharma",
      location: "London, UK",
      contact: "+44 20 7946 0958",
      verified: true,
    },
    {
      name: "MediTrust",
      location: "Mumbai, India",
      contact: "+91 22-2456-7890",
      verified: true,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Inter',sans-serif]">
      <NavBar />

      <div className="max-w-6xl mx-auto mb-20 mt-20">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Verified Suppliers & Hospitals
          </h1>
          <p className="text-gray-600 mb-6">
            We collaborate with verified suppliers and hospitals to ensure the
            authenticity of medicines and healthcare products.
          </p>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            />
          </div>

          {/* Supplier List */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((supplier, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-lg shadow shadow-blue-100 border border-primary-100 hover:bg-primary-50 transition-all duration-300 cursor-pointer"
                  onClick={() => alert(`Navigating to ${supplier.name}`)}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-700">
                      {supplier.name}
                    </h2>
                    {supplier.verified && (
                      <CheckCircle className="text-primary-400" size={20} />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 flex items-center mt-2">
                    <MapPin className="mr-2" size={16} />
                    {supplier.location}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact: {supplier.contact}
                  </p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No suppliers found.</p>
            )}
          </ul>

          {/* Back Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


const SecurePrescriptionUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUploadStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    // Simulate file upload
    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("Upload Successful!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Inter',sans-serif]">
      <NavBar />

      <div className="max-w-6xl mx-auto mb-20 mt-20">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Secure Prescription Upload
          </h1>
          <p className="text-gray-600 mb-6">
            Upload your prescription securely for validation. We ensure your
            data is handled with the highest level of security and privacy.
          </p>

          <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Upload Prescription
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Accepted formats: PDF, JPG, PNG
                </p>
              </div>

              {uploadStatus && (
                <p
                  className={`text-sm mt-2 ${
                    uploadStatus.includes("Successful")
                      ? "text-primary-500"
                      : "text-red-500"
                  }`}
                >
                  {uploadStatus}
                </p>
              )}

              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 mt-4"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-medium text-black mb-2">Need Help?</h2>
            <p className="text-gray-600">
              If you experience any issues uploading your prescription, please{" "}
              <a href="/contact" className="text-primary-400 hover:underline">
                contact support
              </a>
              .
            </p>
          </div>

          <div className="mt-6 ml-5">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const PriorityEmergencyHandling = () => {
  const navigate = useNavigate();
  const [activeRequests, setActiveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("/emergency");
        if (response.status === 200) {
          setActiveRequests(response.data.emergencyRequests || []);
        }
      } catch (error) {
        console.error("Error fetching emergency requests:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleNewRequest = () => {
    navigate("/new-emergency-request");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa] font-['Inter',sans-serif]">
      <NavBar />

      <div className="max-w-6xl mx-auto mb-20 mt-32">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Priority-based Emergency Handling
          </h1>
          <p className="text-gray-600 mb-6">
            Flag urgent requirements to notify verified suppliers immediately.
            Our system ensures rapid response for emergencies.
          </p>

          {loading ? (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <p className="text-gray-700">Loading emergency requests...</p>
            </div>
          ) : activeRequests.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Active Emergency Requests
              </h2>
              <ul>
                {activeRequests.map((request) => (
                  <li
                    key={request._id}
                    className="flex justify-between items-center bg-primary-50 p-4 rounded-lg mb-4 shadow-sm border border-primary-100"
                  >
                    <div>
                      <h3 className="text-md font-semibold text-gray-800">
                        {request.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {request.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Priority: {request.priority} | Location: {request.location}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleNewRequest}
                className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 cursor-pointer"
              >
                Flag a New Emergency
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <p className="text-gray-700 mb-4">
                No active emergency requests.
              </p>
              <button
                onClick={handleNewRequest}
                className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 cursor-pointer"
              >
                Flag a New Emergency
              </button>
            </div>
          )}

          <div className="mt-6 ml-5">
            <h2 className="text-lg font-medium text-black mb-2">
              How It Works
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Submit details of your emergency request.</li>
              <li>Our system instantly notifies verified suppliers.</li>
              <li>Receive prompt responses and support.</li>
            </ul>
          </div>

          <div className="mt-6 ml-5">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const RareInjectionAssistance = () => {
  const navigate = useNavigate();
  const [availableInjections, setAvailableInjections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInjections = async () => {
      try {
        const response = await axios.get("/rareInjection");
        if (response.status === 200) {
          setAvailableInjections(response.data.rareInjections || []);
        }
      } catch (error) {
        console.error("Error fetching rare injections:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInjections();
  }, []);

  const handleRequestInjection = () => {
    navigate("/request-rare-injection");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fafafa] font-['Inter',sans-serif]">
      <NavBar />

      <div className="max-w-6xl mx-auto mb-20 mt-20">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-black mb-4">
            Rare Injection Assistance
          </h1>
          <p className="text-gray-600 mb-6">
            A dedicated section for rare injections in collaboration with
            hospitals and verified suppliers to ensure availability and
            authenticity.
          </p>

          <div className="max-w-6xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Past Injection Requests..."
                className="w-full px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm shadow-blue-100 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Available Injections Section */}
          {loading ? (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <p className="text-gray-700">Loading rare injections...</p>
            </div>
          ) : availableInjections.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Available Rare Injections
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableInjections.map((injection) => (
                  <li
                    key={injection._id}
                    className="bg-primary-50 p-4 rounded-lg shadow-sm border border-primary-100"
                  >
                    <h3 className="text-md font-semibold text-gray-800">
                      {injection.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {injection.quantity} | Urgency: {injection.urgency}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Location: {injection.location} | Contact: {injection.contact}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleRequestInjection}
                className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
              >
                Request a Rare Injection
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow shadow-blue-100 border border-primary-100">
              <p className="text-gray-700 mb-4">
                No rare injections are currently available.
              </p>
              <button
                onClick={handleRequestInjection}
                className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
              >
                Request a Rare Injection
              </button>
            </div>
          )}

          {/* Collaboration Details */}
          <div className="mt-8 ml-5">
            <h2 className="text-lg font-medium text-black mb-2">
              Collaborating Hospitals and Suppliers
            </h2>
            <p className="text-gray-600">
              We partner with verified hospitals and suppliers to ensure the
              availability of rare injections. Contact support for more details.
            </p>
          </div>

          {/* Navigation Button */}
          <div className="mt-6 ml-5">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export {
  VerifiedSuppliers,
  SecurePrescriptionUpload,
  PriorityEmergencyHandling,
  RareInjectionAssistance,
};
