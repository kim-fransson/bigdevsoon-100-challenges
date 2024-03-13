"use client";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { Button, ListBox, ListBoxItem } from "react-aria-components";
import { useState } from "react";
import Image from "next/image";
import { fredoka } from "@/app/fonts";

export const VideoPlayer = () => {
  const [activeVideo, setActiveVideo] = useState(kevinPowellVideos[0]);
  return (
    <main
      className={`min-h-dvh flex lg:justify-center lg:items-center bg-gray-900 ${fredoka.className}`}
    >
      <div className="flex lg:flex-row flex-col w-full lg:max-w-7xl gap-8 p-4">
        <div className="flex flex-col gap-8 w-full">
          <div className="overflow-hidden relative pt-[56.25%] rounded-2xl shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
            ></iframe>
          </div>
          <div className="rounded-2xl p-4 flex lg:flex-row flex-col justify-between items-center  gap-4 overflow-hidden bg-gray-600 text-gray-50 shadow-2xl">
            <div className="flex gap-2 items-center">
              <Image
                width={64}
                height={64}
                className="rounded-full"
                alt=""
                src="https://yt3.googleusercontent.com/ytc/AIdro_kNXftwP_HM0v7RiOXRB21FcoVXr7aodg1WPK7osA=s176-c-k-c0x00ffffff-no-rj"
              />
              <div>
                <p className="font-semibold">Kevin Powell</p>
                <p className="opacity-70 font-medium">885 000 subscribers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 items-center">
                <VisibilityIcon fontSize="small" />
                80 221 347 views
              </div>
              <div className="flex gap-2 items-center">
                <OndemandVideoIcon fontSize="small" />
                761 videos
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="w-full transition-all px-5 py-2 bg-gray-700 hover:bg-gray-800 flex items-center justify-center outline-none 
              focus-visible:outline-2 gap-2 outline-offset-1 focus-visible:outline-yellow-400 pressed:scale-95 rounded-lg"
              >
                <ShareIcon />
                Share
              </Button>
              <Button
                className="w-full gap-2 transition-all px-5 py-2 bg-[#fa2d71] hover:bg-[#4d61b8] flex items-center justify-center outline-none 
              focus-visible:outline-2 outline-offset-1 focus-visible:outline-yellow-400 pressed:scale-95 rounded-lg"
              >
                <ThumbUpIcon />
                Like
              </Button>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl px-6 pt-6 overflow-hidden bg-gray-700 text-gray-50 space-y-4 max-w-md
        shadow-2xl"
        >
          <h2 className="text-xl font-semibold">Videos</h2>
          <ListBox
            items={kevinPowellVideos}
            selectionMode="single"
            orientation="vertical"
            disallowEmptySelection
            selectedKeys={[activeVideo.youtubeId]}
            onSelectionChange={(v) => {
              setActiveVideo(
                kevinPowellVideos.find(
                  (video) => video.youtubeId === Array.from(v)[0],
                ),
              );
            }}
          >
            {(video) => (
              <ListBoxItem
                id={video.youtubeId}
                className="flex items-center gap-3 hover:bg-gray-700 cursor-pointer -mx-6 px-6 py-4
                outline-none focus-visible:outline-2 focus-visible:outline-yellow-400 -outline-offset-2 last:rounded-b-2xl
                selected:bg-gray-800"
              >
                <Image
                  width={1200}
                  height={630}
                  src={video.thumbnail}
                  alt=""
                  className="rounded-2xl shadow-md max-w-48"
                />
                <div className="grid self-start gap-1">
                  <h2 className="font-semibold">{video.title}</h2>
                  <p className="text-sm opacity-70 font-medium">
                    {video.author}
                  </p>
                  <p className="text-sm opacity-70">{`${video.views} · ${video.posted}`}</p>
                </div>
              </ListBoxItem>
            )}
          </ListBox>
        </div>
      </div>
    </main>
  );
};

const kevinPowellVideos = [
  {
    title: "A better image reset for your CSS",
    author: "Kevin Powell",
    views: "416,514 views",
    posted: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/345V2MU3E_w/maxresdefault.jpg",
    youtubeId: "345V2MU3E_w",
  },
  {
    title: "A practical guide to responsive web design",
    author: "Kevin Powell",
    views: "96,906 views",
    posted: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/x4u1yp3Msao/maxresdefault.jpg",
    youtubeId: "x4u1yp3Msao",
  },
  {
    title: "The problem with mobile-first CSS",
    author: "Kevin Powell",
    views: "118,083 views",
    posted: "4 months ago",
    thumbnail: "https://i.ytimg.com/vi/p3k_IrXLNRc/maxresdefault.jpg",
    youtubeId: "p3k_IrXLNRc",
  },
  {
    title: "The problems with viewport units",
    author: "Kevin Powell",
    views: "342,857 views",
    posted: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/veEqYQlfNx8/maxresdefault.jpg",
    youtubeId: "veEqYQlfNx8",
  },
];
