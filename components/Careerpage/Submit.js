import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Upload from "../../public/assets/images/Career/upload.png";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Submit() {
  const [submitFile, setSubmitFile] = useState(null);

  return (
    <>
      <motion.div
        className=" border border-dashed rounded-3xl xsm:p-2 p-5"
        animate={{ opacity: isLoading ? 0.5 : 1 }}
      >
        {submitFile ? (
          <div className="relative p-5 mt-5 rounded-2xl shadow-sm bg-white hover:bg-gray-200 duration-700">
            <button
              className="absolute right-0 -top-3 text-sm font-medium text-red-400 hover:text-red-700"
              onClick={() => {
                setSelectedFile(null);
              }}
            >
              <AiFillCloseCircle className="text-2xl" />
            </button>
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

{
  /* drag-drop */
}
