"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

import {
  Alert as BaseAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/8bit/alert";

import { Button } from "../ui/8bit/button";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ onClose, isOpen }) => {
  return (
    isOpen && (
      <>
        <Button
          variant="ghost"
          onClick={onClose}
          className="p-[10px] text-white self-end"
        >
          x
        </Button>
        <BaseAlert className="flex flex-col items-center gap-2">
          <AlertTitle className="text-[28px]">......</AlertTitle>
          <AlertDescription className="w-full">
            {/* <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "steps(10)" }}
            >
              Move To TRAVEL
            </motion.span> */}
            <div className="flex">
              {"Move To Travel".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.1 }}
                  className="text-2xl"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-2xl text-slate-700"
              >
                |
              </motion.span>
            </div>
          </AlertDescription>
          <Button size="sm" className="mx-auto mt-2">
            <Link href="/travel">move</Link>
          </Button>
        </BaseAlert>
      </>
    )
  );
};

export default Alert;
