
import Link from "next/link";
import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";



const StudioCard = async () => {
    const res = await fetch('http://localhost:5000/studios');
    const data = await res.json();
    console.log(data)
    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

                {data.map(user => (
                    <div 
                    
                    className="border border-gray-200 bg-white rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow"
                    key={user._id}>
                        
                        {/* Studio Image */}
                <div className="relative h-56 overflow-hidden">
                    <Image
                        width={300}
                        height={300}
                        src={user.image}
                        alt={user.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                        {user.category}
                    </span>
                </div>

                {/* Studio Information */}
                <div className="p-5">

                    <div className="mb-3 flex items-center justify-between gap-2">
                        <h2 className="text-lg font-bold text-gray-900">
                            {user.title}
                        </h2>

                        <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
                            <Star size={16} className="fill-yellow-400 text-yellow-400" />
                            {user.rating}
                        </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>{user.location}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">

                        <div>
                            <p className="text-xs text-gray-500">Hourly Rate</p>
                            <p className="text-xl font-bold text-blue-600">
                                ${user.hourlyRate}
                                <span className="text-sm font-normal text-gray-500">
                                    /hour
                                </span>
                            </p>
                        </div>

                        <Link
                            href={`/studios/${user._id}`}
                            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-500"
                        >
                            View Details
                            <ArrowUpRight size={16} />
                        </Link>

                    </div>
                </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default StudioCard;
