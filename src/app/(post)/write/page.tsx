"use client";

import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";

import TripPostSelect from "@/components/home/contents/trip-posts/trip-post-select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { toolbarOptions } from "@/constant/editor";
import { Countries } from "@/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePosts = () => {
  const [value, setValue] = useState("");

  const title = useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  const [country, setCountry] = useState<string>("");

  const handleTemporarySave = () => {
    // TODO : 임시저장 API 호출
    // if result is success
    toast({ description: "임시저장에 성공했습니다." });
  };

  const showToast = (message: string) => {
    toast({ description: message, variant: "destructive" });
  };

  const validateSavePost = () => {
    if (title.current?.value.length === 0) {
      showToast("제목을 입력해주세요.");
      return false;
    }

    if (!country) {
      showToast("나라를 선택해주세요.");
      return false;
    }

    if (!value) {
      showToast("내용을 입력해주세요.");
      return false;
    }

    return true;
  };

  const handleSavePost = async () => {
    if (!validateSavePost()) {
      return;
    }

    // TODO : 이미지만 추출해서 따로 저장하는 로직 추가

    // const text = title.current?.value || "";

    // const { message } = await createPost({
    //   title: text,
    //   country,
    //   contents: value,
    // });

    // if (message === "fail") {
    //   toast({
    //     description: "게시글 업로드에 실패했습니다. 잠시 후 다시 시도해주세요.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // toast({
    //   description: "게시글이 성공적으로 업로드 되었습니다.",
    //   className: "bg-green-600 text-white",
    // });
  };

  return (
    <div className="grid size-full grid-cols-1 px-[20px] gap-y-[20px]">
      <div>
        <input
          ref={title}
          className="w-full h-[46px] outline-none text-[20px]"
          placeholder="제목을 입력하세요"
        />
        <div className="h-px w-full bg-gray-100" />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-y-[20px]">
        <TripPostSelect
          setCountry={(value) => setCountry(value as Countries)}
        />
        <div className="flex items-center gap-x-[8px] justify-end">
          <Button
            disabled
            onClick={handleTemporarySave}
            variant="destructive"
            className="w-[100px] h-[42px]"
          >
            임시저장 하기
          </Button>
          <Button className="w-[100px] h-[42px]" onClick={handleSavePost}>
            업로드하기
          </Button>
        </div>
      </div>
      <ReactQuill
        modules={{ toolbar: toolbarOptions }}
        theme="snow"
        value={value}
        className="h-[600px]"
        onChange={setValue}
      />
    </div>
  );
};

export default WritePosts;
