import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pagination from "@mui/material/Pagination";
import axios from "../utils/axios";
import { AiOutlineArrowRight } from "react-icons/ai";

const Medication = () => {
  const [medicines, setMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;

  const GetMedicines = async () => {
    try {
      const response = await axios.get("/medicine");
      if (response.status === 200) {
        setMedicines(response.data.medicines);
      }
    } catch (error) {
      console.error(`Error Fetching Medicines: ${error.message}`);
    }
  };

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);
  const paginatedMedicines = filteredMedicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleGetDirections = (location) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`,
      "_blank"
    );
  };

  useEffect(() => {
    GetMedicines();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-['Inter',sans-serif]">
      <NavBar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-6xl mx-auto mb-6 mt-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for rare medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm shadow-blue-100 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm sm:text-base"
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

        {/* Most Searched Medicines */}
        <div className="max-w-6xl mx-auto py-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-black mb-6 px-2">
            Most Searched Medicines
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedMedicines.length > 0 ? (
              paginatedMedicines.map((medicine, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-primary-100 shadow shadow-blue-100 flex flex-col"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={medicine.image}
                        alt={medicine.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-sm border border-gray-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h2 className="text-lg font-medium text-gray-700 line-clamp-1">
                        {medicine.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {medicine.details}
                      </p>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                        Location: {medicine.location}
                      </p>
                      <button
                        onClick={() => handleGetDirections(medicine.location)}
                        className="mt-auto py-2 bg-white border border-primary-100 rounded-full shadow-sm shadow-blue-100 text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm flex items-center justify-center sm:self-end self-center gap-2 px-2 w-40 sm:w-28 cursor-pointer"
                      >
                        <p className="text-sm font-medium">Directions</p>
                        <AiOutlineArrowRight className="text-sm font-medium"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-lg">No medicines found</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                color="primary"
                size="medium"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#3b82f6',
                  },
                }}
              />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Medication;
