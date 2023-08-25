import React from "react";
import FileModal from "../Modal/FileModal";
import { AiFillFileText, AiOutlinePaperClip } from "react-icons/ai";
import { BsClipboardFill } from "react-icons/bs";
import { PiWechatLogoBold } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";

import { useState } from "react";
import Uploader from "../Modal/Uploader";

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" bg-white w-full h-[140px] p-2 rounded-lg flex flex-col justify-between my-3">
      {/* sec-1 */}
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-start gap-2">
          <img src="/images/user-1.png" className=" w-6 h-6" alt="" />
          <p className=" text-sm font-semibold text-slate-700">Client Name</p>
        </div>
        <div className=" flex items-center justify-start gap-2">
          <img src="/images/user-2.png" className=" w-6 h-6" alt="" />
          <p className=" text-sm font-semibold text-slate-700">Sadik Istiaq</p>
        </div>
      </div>
      {/* sec-2 */}
      <div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <AiFillFileText></AiFillFileText>
            <p className=""> Lorem ipsum dolor sit amet...</p>
          </div>
          <div className=" flex items-center justify-center bg-slate-200 gap-1 w-14 h-8 rounded">
            <BsClipboardFill className=" w-4 h-4"></BsClipboardFill>
            <p className=" font-semibold text-sm">1/2</p>
          </div>
        </div>
      </div>
      {/* sec-1 */}
      <div className=" flex items-center justify-between">
        <img src="/images/user-1.png" className=" w-6 h-6" alt="" />
        <img src="/images/user-2.png" className=" w-6 h-6" alt="" />
        <div className=" rounded-full bg-slate-200 p-1 font-semibold text-sm">
          12+
        </div>
        <div className=" flex items-center gap-1 align-items-center">
          <PiWechatLogoBold className=" w-5 h-5"></PiWechatLogoBold>
          <p className=" font-semibold">15</p>
        </div>
        <div
          className=" flex items-center gap-1 cursor-pointer"
          onClick={openModal}
        >
          <AiOutlinePaperClip className=" w-5 h-5"></AiOutlinePaperClip>
          <p className=" font-semibold">25</p>
        </div>
        <div className=" flex items-center gap-1">
          <MdOutlineDateRange className=" w-5 h-5"></MdOutlineDateRange>
          <p className=" font-semibold">30-12-2022</p>
        </div>
      </div>
      <div
        className={`h-screen ${
          modalOpen === true ? "flex" : "hidden"
        } flex items-center justify-center`}
      >
        <FileModal isOpen={modalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Upload multiple files</h2>
          <Uploader></Uploader>
        </FileModal>
      </div>
    </div>
  );
};

export default Card;
