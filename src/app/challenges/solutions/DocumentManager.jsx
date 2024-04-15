"use client";

import { poppins } from "@/app/fonts";
import {
  Button,
  GridList,
  GridListItem,
  Radio,
  RadioGroup,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

import React, { useState } from "react";

export const DocumentManager = () => {
  const [selectedDocument, setSelectedDocument] = useState(documents[0]);
  const [selectedChapter, setSelectedChapter] = useState(
    documents[0].chapters[0],
  );
  return (
    <main
      className={`${poppins.className} min-h-dvh flex items-center justify-center bg-purple-400 text-gray-800`}
    >
      <div
        className="lg:rounded-2xl lg:shadow-2xl bg-white lg:max-w-screen-lg w-full lg:min-h-0
        min-h-dvh grid lg:grid-cols-[25%_1fr] grid-cols-[40%_1fr] lg:grid-rows-[min-content_650px] overflow-hidden"
      >
        <div className="flex flex-wrap col-span-full gap-4 items-center border-b-2 border-gray-700 p-4">
          <h2 className="text-xl font-semibold">{selectedDocument.title}</h2>
          <div className="ml-auto flex gap-4 min-w-80">
            <Button
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
          flex items-center flex-1 justify-center rounded-lg gap-2 text-sm px-4 py-3 bg-purple-500 hover:bg-purple-600 text-gray-50 pressed:scale-95 transition-all outline-none"
            >
              <AddIcon fontSize="small" />
              New Chapter
            </Button>
            <Button
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
          flex items-center flex-1 justify-center rounded-lg gap-2 text-sm px-4 py-3 bg-red-500 hover:bg-red-600 text-gray-50 pressed:scale-95 transition-all outline-none"
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <GridList
            className="grid gap-4 transition-all px-4"
            aria-label="documents"
            items={documents}
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={[selectedDocument.id]}
            onSelectionChange={(set) => {
              setSelectedChapter(documents[Array.from(set)[0] - 1].chapters[0]);
              setSelectedDocument(documents[Array.from(set)[0] - 1]);
            }}
          >
            {(document) => (
              <GridListItem
                className="rounded-lg outline-none cursor-pointer space-y-4
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                {({ isSelected }) => (
                  <>
                    <div className="grid grid-cols-[minmax(0px,_1fr)_auto] gap-4 items-center">
                      <div>
                        <h2 className="font-semibold truncate">
                          {document.title}
                        </h2>
                        <span className="text-xs block opacity-70 font-medium">
                          {document.chapters.reduce((acc, chapter) => {
                            const wordCount = countWords(chapter.text);
                            return acc + wordCount;
                          }, 0)}{" "}
                          words
                        </span>
                      </div>

                      <span
                        className={twMerge(
                          "transition-transform duration-500",
                          isSelected ? "-rotate-180" : "rotate-0",
                        )}
                      >
                        <ExpandMoreIcon />
                      </span>
                    </div>
                    <div
                      className={twMerge(
                        "grid transition-[grid-template-rows] duration-500",
                        isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <RadioGroup
                        aria-label="chapters"
                        selectionMode="single"
                        defaultValue={1}
                        className="grid overflow-hidden mt-4"
                        onChange={(val) => {
                          setSelectedChapter(document.chapters[val - 1]);
                        }}
                      >
                        {document.chapters.map((chapter) => (
                          <Radio
                            className="selected:bg-purple-500 selected:text-gray-50
                                px-4 py-2 rounded-lg grid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
                                cursor-pointer"
                            key={chapter.id}
                            value={chapter.id}
                          >
                            <span className="font-semibold text-sm">
                              {chapter.title}
                            </span>
                            <span className="opacity-70 text-xs">
                              {countWords(chapter.text)} words
                            </span>
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>
                  </>
                )}
              </GridListItem>
            )}
          </GridList>

          <Button
            className="lg:mt-auto mt-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
          flex items-center justify-center mx-4 rounded-lg gap-2 text-sm px-4 py-3 bg-purple-500 hover:bg-purple-600 text-gray-50 pressed:scale-95 transition-all outline-none"
          >
            <AddIcon fontSize="small" />
            New Document
          </Button>
        </div>
        <div className="p-6 overflow-scroll border-l-2 border-gray-700">
          <header className="flex items-center mb-4">
            <h2 className="text-3xl font-semibold">{selectedChapter.title}</h2>
            <Button
              className="ml-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600
          flex items-center justify-center text-sm rounded-full hover:bg-purple-600 hover:text-gray-50 p-1 pressed:scale-95 transition-all outline-none"
            >
              <EditIcon fontSize="small" />
            </Button>
          </header>
          {selectedChapter.text.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

const documents = [
  {
    id: 1,
    title: "Mastering Productivity",
    chapters: [
      {
        id: 1,
        title: "Intro",
        text: `Welcome to the journey of unlocking your full potential through the mastery of productivity. In the bustling landscape of the 21st century, where time is both a precious commodity and a fleeting luxury, the quest to optimize our efficiency and effectiveness has never been more pertinent. But productivity is not merely about checking off items on a to-do list or succumbing to the allure of constant busyness. It's about cultivating a mindset of purposeful action, aligning our efforts with our values, and ultimately living a more fulfilling and meaningful life.       
 
In this introductory chapter, we embark on a voyage to explore the essence of productivity and lay the groundwork for our journey ahead. We'll delve into the fundamental principles that underpin productivity mastery and set the stage for the practical strategies and techniques that will follow in subsequent chapters.

At its core, productivity is about maximizing output while minimizing input. It's about achieving more with less, but it's also about making conscious choices about how we allocate our most precious resources: time, energy, and attention. In today's fast-paced world, where distractions lurk around every corner and the pressure to constantly perform can feel overwhelming, mastering productivity requires a holistic approach that encompasses not only time management techniques but also psychological insights and behavioral strategies.

But productivity is not just about getting things done—it's also about doing the right things. It's about setting clear goals and priorities, making intentional decisions about where to focus our efforts, and ruthlessly eliminating anything that doesn't contribute to our long-term objectives. In the chapters that follow, we'll explore a variety of tools and frameworks for prioritization, goal setting, and decision making, empowering you to take control of your time and your life.

As we embark on this journey together, it's important to recognize that productivity is not a one-size-fits-all solution. What works for one person may not work for another, and what works in one context may not work in another. That's why this book is designed to be a comprehensive guide, offering a diverse range of strategies and techniques that can be tailored to suit your individual needs and circumstances.

So, whether you're a busy professional striving to excel in your career, an entrepreneur seeking to grow your business, or simply someone who wants to make the most of your time and talents, I invite you to join me on this transformative journey of productivity mastery. Together, we'll unlock new levels of efficiency, effectiveness, and fulfillment, and create a life that is truly worth living.

This introductory chapter sets the stage for the exploration of productivity mastery, emphasizing the importance of aligning our efforts with our values and goals to live a more fulfilling life. It introduces the fundamental principles of productivity and highlights the holistic approach required to master productivity in today's fast-paced world.`,
      },
      {
        id: 2,
        title: "Chapter 1",
        text: `In the frenetic pace of modern life, the quest for productivity has become a holy grail for many. But what exactly is productivity? Is it merely the ability to check off more items on a to-do list, or does it encompass a deeper understanding of how we allocate our time and energy? In the opening chapter of "Mastering Productivity," we embark on a journey to explore the essence of productivity, seeking not only to enhance our efficiency but also to cultivate a more fulfilling and purpose-driven life.

Productivity, at its core, is about maximizing output while minimizing input. It's about achieving more with less, but it's also about aligning our efforts with our values and goals. In today's hyperconnected world, where distractions abound and the pressure to constantly perform is ever-present, mastering productivity requires a holistic approach that encompasses not only time management techniques but also psychological insights and behavioral strategies.

One of the fundamental principles of productivity is the concept of attention management. In an age characterized by information overload and constant stimulation, our ability to focus has become increasingly scarce and precious. Yet, paradoxically, it is also more essential than ever. In Chapter 1, we delve into the neuroscience of attention, exploring how our brains process information and why we are so easily susceptible to distractions. By understanding the mechanisms underlying our attentional capacities, we can begin to develop strategies to harness and direct our focus more effectively, thereby enhancing our productivity and overall well-being.

Another key aspect of productivity is the art of prioritization. With an endless array of tasks competing for our attention, knowing what to focus on—and, perhaps more importantly, what to ignore—is essential for achieving meaningful results. In Chapter 1, we introduce the concept of the "priority matrix," a powerful tool for categorizing tasks based on their urgency and importance. By learning how to distinguish between what is merely urgent and what is truly important, we can avoid falling into the trap of busyness for its own sake and instead allocate our time and energy to activities that align with our long-term objectives.

As we embark on this journey to master productivity, it's important to recognize that there is no one-size-fits-all solution. What works for one person may not work for another, and what works in one context may not work in another. That's why, throughout this book, we will explore a variety of strategies and techniques, drawing on insights from psychology, neuroscience, and personal development. Whether you're a busy professional striving to excel in your career, an entrepreneur seeking to grow your business, or simply someone who wants to make the most of their time and talents, "Mastering Productivity" offers practical guidance and inspiration to help you achieve your goals and live a more fulfilling life.

In the chapters that follow, we will delve deeper into specific aspects of productivity, from time management and goal setting to habit formation and decision making. But before we can dive into the practical strategies, it's essential to lay the groundwork by developing a clear understanding of what productivity truly means and why it matters. By cultivating a mindset of purposeful action and intentional living, we can unlock our full potential and create a life of greater meaning, fulfillment, and impact. Welcome to the journey of mastering productivity—let's begin.`,
      },
      {
        id: 3,
        title: "Chapter 2",
        text: `In the hustle and bustle of our daily lives, time often feels like a scarce and fleeting resource. We find ourselves constantly juggling a multitude of tasks and responsibilities, struggling to keep up with the relentless march of the clock. But what if there was a way to reclaim control over our time, to manage it more mindfully and intentionally? In this chapter, we explore the transformative power of mindful time management and how it can revolutionize the way we approach our daily routines and long-term goals.

At its core, mindful time management is about more than just scheduling tasks and appointments; it's about cultivating a deeper awareness of how we spend our time and making deliberate choices about where to allocate our attention and energy. It involves pausing to reflect on our priorities and values, and then structuring our days in a way that aligns with them. By adopting a mindful approach to time management, we can break free from the cycle of busyness and reactivity, and instead focus on what truly matters most to us.

One of the key principles of mindful time management is the concept of "time blocking." Rather than trying to tackle a never-ending to-do list in a haphazard manner, time blocking involves setting aside dedicated blocks of time for specific tasks or activities. By creating a clear structure for our days and protecting these time blocks from interruptions and distractions, we can increase our productivity and focus, and make significant progress towards our goals.

But mindful time management is not just about maximizing productivity; it's also about fostering a sense of balance and well-being in our lives. It's about recognizing that our time is finite and precious, and making room for the activities and relationships that bring us joy and fulfillment. In this chapter, we'll explore strategies for creating boundaries around our time, saying no to non-essential commitments, and carving out space for rest and rejuvenation. By striking a healthy balance between work and leisure, we can avoid burnout and cultivate a more sustainable approach to productivity.

In the chapters that follow, we'll delve deeper into specific techniques and tools for implementing mindful time management in our lives. But for now, let us reflect on the profound impact that a mindful approach to time can have on our overall well-being and sense of fulfillment. By embracing the principles of mindful time management, we can unlock new levels of productivity, creativity, and happiness, and create a life that is truly aligned with our deepest values and aspirations.`,
      },
    ],
  },
  {
    id: 2,
    title: "The Seductive Symphony of Frogs",
    chapters: [
      {
        id: 1,
        title: "Intro",
        text: `In the lush embrace of a moonlit marsh, where reeds whisper secrets to the night breeze and fireflies dance in syncopated rhythms, there exists an ancient art whispered only among the most enchanting of souls - the art of seducing frogs. Within this mystical realm, one discovers not merely a pursuit of pleasure, but an exquisite dance of charm and allure, where every flicker of eyelash and subtle gesture is woven into a symphony of amphibian fascination. Join us as we delve into the captivating world where the boundary between fantasy and reality blurs, and where the courtship of frogs unveils the depths of allure and the magic of connection.`,
      },
      {
        id: 2,
        title: "The Melodic Murmurs of the Marsh",
        text: `In the heart of the marshland, where the mist curls like tendrils around the cypress trees and the water reflects the silver glow of the moon, our journey into the realm of frog seduction continues. Here, amidst the tranquil symphony of chirping crickets and the gentle lapping of water against the shore, our protagonist, Ariadne, delves deeper into the ancient art.

With each passing night, Ariadne learns to attune her senses to the subtlest nuances of the marsh's inhabitants. She listens intently to the melodic murmurs of the frogs, deciphering the rhythms of their calls like a maestro interpreting a symphony. Each species has its own song, its own cadence, and Ariadne learns to mimic them with delicate precision.

Under the watchful gaze of the moon, Ariadne practices her craft, her movements fluid and graceful as she dances along the water's edge. She learns the gentle art of coaxing, using soft whispers and inviting gestures to entice the frogs from their hiding places. With patience and perseverance, she discovers the power of allure, drawing the creatures closer with each seductive note.

But amidst the enchantment of the marsh, Ariadne encounters challenges as well. Some frogs prove elusive, their calls faint whispers lost in the night. Others are more cautious, wary of the stranger in their midst. Yet Ariadne persists, her determination fueled by a passion to unlock the secrets of this mesmerizing world.

As the nights pass, Ariadne's efforts bear fruit. She finds herself surrounded by a chorus of frogs, their voices blending in harmonious unity. Together, they create a symphony of sound that reverberates through the marsh, echoing into the depths of the night.

And so, under the canopy of stars, Ariadne continues her journey, guided by the enchanting melodies of the marsh and the timeless allure of frog seduction.`,
      },
    ],
  },
];

const countWords = (str) => {
  // Remove leading and trailing whitespaces
  str = str.trim();

  // Split the string by whitespace characters
  const words = str.split(/\s+/);

  // Return the number of words
  return words.length;
};
