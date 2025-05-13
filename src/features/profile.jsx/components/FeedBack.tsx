import React from "react";

const FeedBack : React.FC = () => {
    return(
        <>
          <div className="flex justify-between items-center">
                    {/* Schedule */}
                    <div className="mb-4">
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">
                            Interview Schedule
                        </h3>
                        <p className="text-sm text-gray-600">May 6, 2025 - 10:00 AM IST</p>
                    </div>

                    {/* Feedback */}
                    <div className="mb-4">
                        <h3 className="font-semibold text-sm text-gray-700 mb-1">
                            Interviewer Feedback
                        </h3>
                        <p className="text-sm text-gray-600">
                            Candidate showed good understanding of React and problem-solving. Needs improvement in system design.
                        </p>
                    </div>
                </div>
                {/* HR Notes */}
                <div>
                    <h3 className="font-semibold text-sm text-gray-700 mb-1">HR Notes</h3>
                    <textarea
                        className="w-full p-2 text-sm border border-gray-300 rounded-md"
                        rows={3}
                        placeholder="Add private notes here..."
                    ></textarea>
                </div>
        </>
      
    )
}

export default FeedBack