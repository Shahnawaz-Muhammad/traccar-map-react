// src/api/vehicleAPI.js
const BASE_URL = "https://mylocatorplus.com/gps/api/";

// Login to Traccar (Session-based Authentication)
export const login = async (email, password) => {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(`${BASE_URL}session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(), 
        credentials: "include", 
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }
    return response.json(); 
};

// Fetch Vehicle Data
export const getVehicleData = async () => {
    const response = await fetch(`${BASE_URL}positions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // Include session cookies
    });

    if (!response.ok) {
        throw new Error("Failed to fetch vehicle data");
    }

    return response.json(); // Returns vehicle data
};
