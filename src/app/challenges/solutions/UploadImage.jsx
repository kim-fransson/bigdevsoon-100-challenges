"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DropZone,
  FileTrigger,
  Modal,
  ModalOverlay,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { useCallback, useEffect, useState } from "react";
import fileSvg from "@/app/assets/file.svg";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

const button = tv({
  base: [
    "outline-none transition-all rounded-md px-6 py-2 font-semibold flex items-center justify-center",
  ],
  variants: {
    isFocusVisible: {
      true: ["outline-2 outline-[#4dc6ef] outline-offset-2"],
    },
    isPressed: {
      true: ["scale-95"],
    },
    isRounded: {
      true: ["rounded-full p-1"],
    },
    variant: {
      cancel: [
        "border border-gray-700 text-gray-900 hover:bg-gray-900 hover:text-gray-50 hover:border-gray-900",
      ],
      delete: [
        "bg-red-300 text-red-600 hover:ring-2 hover:ring-red-600 hover:bg-white",
      ],
      pause: [
        "bg-gray-200 text-gray-600 hover:ring-2 hover:ring-gray-600 hover:bg-white",
      ],
      success: [
        "bg-green-200 text-green-600 hover:ring-2 hover:ring-green-600 hover:bg-white",
      ],
      file: ["text-[#4dc6ef] font-semibold p-0 inline-block"],
    },
  },
});

const card = tv({
  base: ["rounded-2xl bg-white shadow-xl px-6 py-8 grid"],
});

export const UploadImage = () => {
  const [files, setFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeFile, setActiveFile] = useState();

  const onDelete = useCallback(() => {
    if (activeFile) {
      setFiles((curr) => curr.filter((f) => f.name !== activeFile.name));
      setActiveFile(null);
      setIsOpen(false);
    }
  }, [activeFile]);

  useEffect(() => {
    if (activeFile) {
      setIsOpen(true);
    }
  }, [activeFile]);

  return (
    <main className={`min-h-dvh bg-indigo-50 flex items-center justify-center ${fredoka.className}`}>
      <div className={card({ class: "max-w-screen-sm w-full gap-4" })}>
        <h2 className="text-xl font-semibold">Upload Photo</h2>

        <DropZone
          className="border-2 border-dashed border-gray-400 
          rounded-2xl flex flex-col items-center justify-center p-8"
          allowsMultiple
          onDrop={(e) => {
            setFiles((curr) => [...curr, ...e.items]);
            console.log(e);
          }}
        >
          <Image priority src={fileSvg} alt="files" />
          <FileTrigger
            acceptedFileTypes={[".jpg", ".jpeg", ".png"]}
            allowsMultiple
            onSelect={(files) => {
              setFiles((curr) => [...curr, ...files]);
            }}
          >
            <p className="font-medium mt-3">
              Drop your image here or{" "}
              <Button
                className={(states) => button({ ...states, variant: "file" })}
              >
                browse
              </Button>
            </p>
          </FileTrigger>
          <Text className="text-gray-500 text-xs font-medium mt-2">
            PNG, JPG, JPEG
          </Text>
        </DropZone>
        <div className="grid gap-4">
          {files.map((file) => (
            <File key={file.name} file={file} setActiveFile={setActiveFile} />
          ))}
        </div>
      </div>
      <ConfirmationModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onDelete={onDelete}
        setActiveFile={setActiveFile}
      />
    </main>
  );
};

export const File = ({ file, setActiveFile }) => {
  const [fileSrc, setFileSrc] = useState("");
  useEffect(() => {
    const src = URL.createObjectURL(file);
    setFileSrc(src);

    return () => {
      URL.revokeObjectURL(src);
    };
  }, [file]);
  return (
    <div className="p-2 text-gray-700 flex gap-2 border border-gray-400 rounded-2xl">
      {fileSrc && (
        <Image
          width={64}
          height={64}
          src={fileSrc}
          className="rounded-2xl"
          alt=""
        />
      )}
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div className="grid">
            <span className="text-gray-800 font-medium truncate">
              {file.name}
            </span>
            <span className="text-gray-500 text-sm font-medium">
              {(file.size / 1000000).toFixed(1) + "mb"}
            </span>
          </div>
          <Button
            onPress={() => setActiveFile(file)}
            className={(states) =>
              button({
                ...states,
                variant: "delete",
                isRounded: true,
                class: "ml-auto",
              })
            }
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ConfirmationModal = ({ isOpen, setIsOpen, onDelete, setActiveFile }) => {
  return (
    <ModalOverlay
      isDismissable
      isOpen={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setActiveFile(null);
        }
      }}
      className={({ isEntering, isExiting }) => `
      fixed inset-0 z-10 overflow-y-auto flex min-h-dvh items-center justify-center backdrop-blur
      ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
      ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
    `}
    >
      <Modal
        className={({ isEntering, isExiting }) => `
              ${isEntering ? "animate-fade animate-duration-300 animate-normal" : ""}
              ${isExiting ? "animate-fade animate-duration-200 animate-reverse" : ""}
            `}
      >
        <Dialog aria-label="delete confirmation" className="outline-none">
          {({ close }) => (
            <div className={card({ className: "gap-4 max-w-xs" })}>
              <p className="font-medium text-gray-800">Are you sure you want to delete uploaded picture?</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onPress={close}
                  className={(states) =>
                    button({ ...states, variant: "cancel" })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onPress={onDelete}
                  className={(states) =>
                    button({ ...states, variant: "delete" })
                  }
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};
