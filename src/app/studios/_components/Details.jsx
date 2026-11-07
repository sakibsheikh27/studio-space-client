'use client'

import {
  MapPin,
  Star,
  Clock,
  Users,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  CalendarDays,
  Camera,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const Details = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleBooking = (e) => {
    e.preventDefault();

    alert("Booking request submitted successfully!");
    setIsModalOpen(false);
  };



    return (
        <div>
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-10">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                                {studio.category}
                            </span>

                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{studio.rating}</span>
                                <span>({studio.totalReviews} reviews)</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {studio.title}
                        </h1>

                        <p className="flex items-center gap-2 text-gray-500 mt-3">
                            <MapPin size={18} />
                            {studio.location}
                        </p>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid md:grid-cols-3 gap-3 mb-12">
                        <div className="md:col-span-2 relative h-[350px] md:h-[480px]">
                            <Image
                                fill
                                src={studio.images[activeImage]}
                                alt={studio.title}
                                className="w-full h-full object-cover rounded-2xl"
                            />

                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
                                aria-label="Previous image"
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
                                aria-label="Next image"
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        <div className="hidden md:flex flex-col gap-3">
                            {studio.images.map((image, index) => (
                                <button
                                    key={image}
                                    onClick={() => setActiveImage(index)}
                                    className={`h-[154px] rounded-xl overflow-hidden border-2 ${activeImage === index
                                            ? "border-purple-600"
                                            : "border-transparent"
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Studio view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Specifications */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">
                                    Workspace Specifications
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div
                                        icon={<Clock />}
                                        title="Hourly Rate"
                                        value={`$${studio.hourlyRate}/hour`}
                                    />

                                    <div
                                        icon={<ShieldCheck />}
                                        title="Security Deposit"
                                        value={`$${studio.securityDeposit}`}
                                    />

                                    <div
                                        icon={<Users />}
                                        title="Maximum Capacity"
                                        value={`${studio.maxCapacity} People`}
                                    />

                                    <div
                                        icon={<Camera />}
                                        title="Workspace Type"
                                        value={studio.category}
                                    />
                                </div>
                            </section>

                            {/* Amenities */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">
                                    Available Amenities
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {studio.amenities.map((amenity) => (
                                        <div
                                            key={amenity}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <Check className="text-purple-600" size={20} />
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Host */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">
                                    Meet Your Host
                                </h2>

                                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border">
                                    <img
                                        src={studio.host.image}
                                        alt={studio.host.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            {studio.host.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Host since {studio.host.joined}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Reviews */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6">
                                    Customer Reviews
                                </h2>

                                <div className="space-y-5">
                                    {studio.reviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-5 rounded-2xl border"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="font-semibold">{review.name}</h3>

                                                <div className="flex items-center gap-1">
                                                    <Star
                                                        size={16}
                                                        className="fill-yellow-400 text-yellow-400"
                                                    />
                                                    <span>{review.rating}.0</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Booking Card */}
                        <aside>
                            <div className="bg-white border rounded-2xl p-6 shadow-sm sticky top-24">
                                <p className="text-gray-500">Starting from</p>

                                <h2 className="text-3xl font-bold mt-1">
                                    ${studio.hourlyRate}
                                    <span className="text-base font-normal text-gray-500">
                                        {" "}/ hour
                                    </span>
                                </h2>

                                <div className="border-t border-b py-4 my-5 space-y-3">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Security Deposit</span>
                                        <span>${studio.securityDeposit}</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Maximum Guests</span>
                                        <span>{studio.maxCapacity} People</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition"
                                >
                                    Book Workspace Now
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-3">
                                    You won't be charged yet
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Booking Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-5 top-5 text-gray-500"
                                aria-label="Close booking modal"
                            >
                                <X />
                            </button>

                            <h2 className="text-2xl font-bold mb-2">
                                Book This Workspace
                            </h2>

                            <p className="text-gray-500 mb-6">
                                Select your preferred booking details.
                            </p>

                            <form onSubmit={handleBooking} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Booking Date
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        min={new Date().toISOString().split("T")[0]}
                                        value={booking.date}
                                        onChange={(e) =>
                                            setBooking({ ...booking, date: e.target.value })
                                        }
                                        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        required
                                        value={booking.startTime}
                                        onChange={(e) =>
                                            setBooking({ ...booking, startTime: e.target.value })
                                        }
                                        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        required
                                        value={booking.endTime}
                                        onChange={(e) =>
                                            setBooking({ ...booking, endTime: e.target.value })
                                        }
                                        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Number of Guests
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max={studio.maxCapacity}
                                        required
                                        value={booking.guests}
                                        onChange={(e) =>
                                            setBooking({ ...booking, guests: Number(e.target.value) })
                                        }
                                        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-purple-600"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
                                >
                                    Submit Booking Request
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Details;