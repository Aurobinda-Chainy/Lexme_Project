import React from "react";
import {FaQuoteLeft, FaQuoteRight, FaPlay} from "react-icons/fa";

const PatientStoryCard = ({ story }) => {
    return(
        <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between transition duration-300">
            <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                    <FaQuoteLeft className="text-2xl text-orange-200 absolute top-0 left-0"/>
                    <div className="absolute bottom-0 right-0 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center  text-red-500">
                        <FaPlay/>
                    </div>
                </div>
                <p className="text-gray-700 text-sm">{story.description}</p>
            </div>
            <div className="mt-4 text-right">
                <p className="text-sm text-gray-500 mt-1">{story.hospital}</p>
                <FaQuoteRight className="text-orange-200 text-2xl "/>
            </div>
        </div>
    )
}

export default PatientStoryCard;