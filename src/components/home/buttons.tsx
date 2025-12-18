"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "../ui/8bit/button";
import Alert from "./alert";

const Buttons = () => {
  const [isShowAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col gap-[10px] items-center">
      <Alert isOpen={isShowAlert} onClose={closeAlert} />
      {!isShowAlert && (
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button onClick={handleClick} variant="outline">
            START
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Buttons;
