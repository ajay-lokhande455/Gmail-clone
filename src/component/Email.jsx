import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

const Email = () => {
  const selectedEmail = useSelector((state) => state.appSlice.selectedEmail);
  const navigate = useNavigate();
  const params = useParams()

  const deleteMailByid = async (id) => {
    try{
      await deleteDoc(doc(db, 'email', id))
      navigate("/");
    }catch(err){
      console.error(err);
    }}
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div onClick={()=> navigate("/")} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <IoMdArrowBack size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <BiArchiveIn size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdOutlineReport size="20px" />
          </div>
          <div onClick={()=> deleteMailByid(params.id)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdDeleteOutline size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdOutlineMarkEmailUnread size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdOutlineWatchLater size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdOutlineAddTask size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <MdOutlineDriveFileMove size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <IoMdMore size="20px" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 p-2">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>

      <div className="h-[90vh] overflow-auto px-4 ">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2 ">
            <h1 className="text-xl font-medium ">{selectedEmail?.subject} </h1>
            <span className="text-sm bg-gray-200 rounded-md scroll-px-2">inbox</span>
          </div>
        </div>
        <div className="flex-none text-gray-400 my-5 text-sm">
        <p>
          {selectedEmail?.createdAt?.seconds
            ? new Date(selectedEmail.createdAt.seconds * 1000).toLocaleString()
            : "N/A"}
        </p>
          </div>

          <div className="text-gray-500 text-sm">
            <h1>{selectedEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-10">
            <p>{selectedEmail?.message}</p>
          </div>
      </div>
    </div>
  );
};

export default Email;
