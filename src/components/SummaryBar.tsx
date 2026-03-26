import React from "react";

const SummaryBar: React.FC = () => {
    return (
        <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">
            <h2 className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
                Selected ingredients:
            </h2>

            <div className="flex-1 flex flex-col justify-center items-center gap-6">
                Totals:
            </div>
            <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
                Weigth
            </div>
            <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full mb-2 shadow-md text-center">
                Price:
            </div>
        </div>
    )
}
export default SummaryBar;