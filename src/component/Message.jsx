import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/appSlice";

const Message = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle opening an email
  const openMail = () => {
    navigate(`/mail/${email.id}`);
    dispatch(setSelectedEmail(email));
  };

  // Truncate message to 20 words
  const messageWords = (email?.message ?? "").split(" ");
  const truncatedMessage = messageWords.slice(0, 20).join(" ") + (messageWords.length > 20 ? "..." : "");

  return (
    <div
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      {/* Icons Section */}
      <div className="flex items-center gap-3">
        <MdCropSquare className="w-5 h-5 text-gray-300" />
        <RiStarLine className="w-5 h-5 text-gray-300" />
      </div>

      {/* Message Content */}
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">{truncatedMessage}</p>
      </div>

      {/* Timestamp */}
      <div className="flex-none text-gray-400 text-sm">
        <p>
          {email?.createdAt?.seconds
            ? new Date(email.createdAt.seconds * 1000).toLocaleString()
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Message;
