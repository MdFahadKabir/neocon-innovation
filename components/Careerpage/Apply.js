import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Upload from "../../public/assets/images/Career/upload.png";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Apply() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setIsLoading(true);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setIsLoading(true);
    }
  };

  const fileSizeInMB = (size) => {
    return (size / (1024 * 1024)).toFixed(2);
  };
  const handlePreviewClick = () => {
    const fileURL = URL.createObjectURL(selectedFile);
    window.open(fileURL, "_blank");
  };

  return (
    <>
      <motion.div
        className={` border border-dashed rounded-3xl xsm:p-2 p-5 ${
          isDragging ? "border-blue-500" : "border-gray-300"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        animate={{ opacity: isLoading ? 0.5 : 1 }}
      >
        <div className="flex justify-between xsm:flex-col sm:flex-col">
          <Image src={Upload} className="w-16 xsm:mx-auto sm:mx-auto" />
          <div className="flex flex-col text-start my-auto xsm:py-5 sm:py-5">
            <p className="text-sm">Select a file or drag and drop here</p>
            <p className="text-xs text-neocon_gray">
              JPG, PNG or PDF, file size no more than 10MB
            </p>
          </div>
          <label className="font-medium cursor-pointer bg-neocon_black text-white hover:bg-neocon_blue_200 my-auto xsm:my-3 sm:my-3 px-5 py-2 rounded-xl duration-700 text-center">
            select file
            <input
              type="file"
              className="hidden"
              accept="application/pdf"
              onChange={handleFileInputChange}
              disabled={selectedFile !== null}
            />
          </label>
        </div>

        {selectedFile ? (
          <div className="relative p-5 mt-5 rounded-2xl shadow-sm bg-white hover:bg-gray-200 duration-700">
            <button
              className="absolute right-0 -top-3 text-sm font-medium text-red-400 hover:text-red-700"
              onClick={() => {
                setSelectedFile(null);
                setIsLoading(false);
              }}
            >
              <AiFillCloseCircle className="text-2xl" />
            </button>

            <div className="flex justify-between xsm:flex-col sm:flex-col items-center ">
              <p className="text-xs font-medium text-neocon_black flex flex-row">
                {selectedFile.name}&nbsp; &nbsp;
                <a
                  href={URL.createObjectURL(selectedFile)}
                  onClick={handlePreviewClick}
                  className="text-neocon_blue_200"
                >
                  Preview
                </a>
              </p>
              <p className="text-xs font-medium text-gray-600">
                ({fileSizeInMB(selectedFile.size)} MB)
              </p>
            </div>

            {isLoading && (
              <div className="mt-2">
                <motion.div
                  className="h-1 bg-neocon_blue_200 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            )}
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

{
  /* drag-drop */
}
