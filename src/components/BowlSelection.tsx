import React from "react";

const BowlSeletion: React.FC = () => {
    return (
        <div className="bg-zinc-800 rounded-[3rem] p-6 text-white w-full lg:w-1/4 flex flex-col items-center shadow-lg">
            <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 shrink-0">
                1
            </div>

            <h2 className="text-lg font-semibold mb-4">Valitse rasia</h2>

            <div className="w-full flex flex-col gap-3">
                <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4">

                </div>
                <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4">

                </div>
                <div className="h-12 border-2 border-gray-600 rounded-xl flex items-center px-4">

                </div>
            </div>
        </div>
    )
}
export default BowlSeletion;