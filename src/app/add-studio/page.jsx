
"use client";

import { useState } from "react";

const categories = [
    "Photo Studio",
    "Film Stage",
    "Podcast Lounge",
    "Music Suite",
    "Workshop",
];

const availableAmenities = [
    "Wi-Fi",
    "Air Conditioning",
    "Parking",
    "Lighting Equipment",
    "Soundproof Room",
    "Projector",
    "Restroom",
    "Kitchen",
    "Furniture",
    "Camera Equipment",
];

export default function AddStudioPage() {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        hourlyRate: "",
        securityDeposit: "",
        maxCapacity: "",
        location: "",
        image: "",
        amenities: [],
        overview: "",
        userName: "",
        userEmail: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle amenities checkbox
    const handleAmenities = (amenity) => {
        setFormData((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter((item) => item !== amenity)
                : [...prev.amenities, amenity],
        }));
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch("http://localhost:5000/add-studio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    hourlyRate: Number(formData.hourlyRate),
                    securityDeposit: Number(formData.securityDeposit),
                    maxCapacity: Number(formData.maxCapacity),
                }),
            });

            const data = await res.json();

            console.log(data)

            if (!res.ok) {
                throw new Error(data.message || "Failed to add studio");
            }

            alert("Studio added successfully!");

            setFormData({
                title: "",
                category: "",
                hourlyRate: "",
                securityDeposit: "",
                maxCapacity: "",
                location: "",
                image: "",
                amenities: [],
                overview: "",
                userName: "",
                userEmail: "",
            });
        } catch (error) {
            console.error(error);
            alert(error.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

    const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-10">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Add Your Studio
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Share your creative space with people around the world.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Basic Information */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Basic Information
                        </h2>

                        <div className="grid gap-5 md:grid-cols-2">

                            <div className="md:col-span-2">
                                <label className={labelClass}>Studio Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. Creative Photography Studio"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className={labelClass}>Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className={inputClass}
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </section>

                    {/* Pricing & Capacity */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Pricing & Capacity
                        </h2>

                        <div className="grid gap-5 md:grid-cols-3">

                            <div>
                                <label className={labelClass}>Hourly Rate ($) *</label>
                                <input
                                    type="number"
                                    name="hourlyRate"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                    placeholder="50"
                                    min="1"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>
                                    Security Deposit ($) *
                                </label>
                                <input
                                    type="number"
                                    name="securityDeposit"
                                    value={formData.securityDeposit}
                                    onChange={handleChange}
                                    placeholder="100"
                                    min="0"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Max Capacity *</label>
                                <input
                                    type="number"
                                    name="maxCapacity"
                                    value={formData.maxCapacity}
                                    onChange={handleChange}
                                    placeholder="10"
                                    min="1"
                                    className={inputClass}
                                    required
                                />
                            </div>

                        </div>
                    </section>

                    <div>
                        <label className={labelClass}>Rating</label>

                        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            rating: star,
                                        }))
                                    }
                                    className={`text-3xl transition ${star <= formData.rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </button>
                            ))}

                            <span className="ml-2 text-sm font-semibold text-gray-600">
                                {formData.rating || 0}/5
                            </span>
                        </div>
                    </div>

                    {/* Location & Image */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Location & Image
                        </h2>

                        <div className="space-y-5">

                            <div>
                                <label className={labelClass}>Location / Address *</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="123 Main Street, New York"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass}>Studio Image URL *</label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="https://example.com/studio.jpg"
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {formData.image && (
                                <img
                                    src={formData.image}
                                    alt="Studio preview"
                                    className="h-52 w-full rounded-xl object-cover"
                                />
                            )}

                        </div>
                    </section>

                    {/* Amenities */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Studio Amenities
                        </h2>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

                            {availableAmenities.map((amenity) => (
                                <label
                                    key={amenity}
                                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 p-3 text-sm text-gray-700 hover:border-indigo-400"
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.amenities.includes(amenity)}
                                        onChange={() => handleAmenities(amenity)}
                                        className="h-4 w-4 accent-indigo-600"
                                    />
                                    {amenity}
                                </label>
                            ))}

                        </div>
                    </section>

                    {/* Overview */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Detailed Overview
                        </h2>

                        <textarea
                            name="overview"
                            value={formData.overview}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Describe your studio, facilities, equipment and special features..."
                            className={inputClass}
                            required
                        />
                    </section>

                    {/* Host Information */}
                    <section>
                        <h2 className="mb-5 border-b pb-3 text-xl font-semibold text-gray-800">
                            Host Information
                        </h2>

                        <div className="grid gap-5 md:grid-cols-2">

                            <div>
                                <label className={labelClass}>User Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    readOnly
                                    placeholder="Logged-in user name"
                                    className={`${inputClass} cursor-not-allowed bg-gray-100`}
                                />
                            </div>

                            <div>
                                <label className={labelClass}>User Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    value={formData.userEmail}
                                    readOnly
                                    placeholder="Logged-in user email"
                                    className={`${inputClass} cursor-not-allowed bg-gray-100`}
                                />
                            </div>

                        </div>
                    </section>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "Adding Studio..." : "Submit Studio"}
                    </button>

                </form>
            </div>
        </div>
    );
}
