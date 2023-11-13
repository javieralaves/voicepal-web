import MediaPlayer from "@/components/MediaPlayer";
import React, { useState } from "react";
import { RiCheckFill, RiMicFill } from "react-icons/ri";

export default function LogPage() {
  // states for copying to clipboard
  const [isSummaryCopied, setIsSummaryCopied] = useState(false);
  const [isTranscriptCopied, setIsTranscriptCopied] = useState(false);

  // content
  const audioLogTitle = "The Hypothesis Behind VoicePal";
  const authorName = "Javi Alaves";
  const summary =
    "In 'The Hypothesis Behind VoicePal,' we explore the innovative concept of utilizing voice recordings to capture fleeting thoughts and ideas in real-time. The core hypothesis is that in today's fast-paced world, people often encounter moments of inspiration or critical thinking but lack the immediate tools to document these thoughts effectively. VoicePal aims to bridge this gap by providing a seamless and intuitive platform for recording, organizing, and revisiting spoken thoughts, thereby transforming ephemeral ideas into tangible insights and actions. This approach is envisioned to enhance productivity, creativity, and personal reflection.";

  const transcript =
    "Okay, let's think this through. The main idea behind VoicePal is pretty fascinating. It's all about capturing those fleeting thoughts, right? The ones that come to us when we're walking, driving, or just doing daily tasks. So, the hypothesis is that in today’s fast-paced world, we're constantly having these insightful thoughts. But the problem is, we don't always have a way to capture them effectively. That's where VoicePal steps in. It's more than just a voice recorder. It's a tool that lets us document our thoughts in real-time, organically, without breaking stride. I mean, how many times have we lost great ideas because we couldn't write them down? VoicePal could change all that. With it, we can just speak our thoughts out loud, and it captures them for us. Then, later, we can revisit these ideas, organize them, and actually do something with them. It's like having a personal assistant for your brain! I think the real power of VoicePal lies in its simplicity and immediacy. There’s no fumbling around with typing or writing. Just talk, and it listens. This could really help with creativity, productivity, and even personal reflection. So, the hypothesis? VoicePal can transform the way we capture and process our fleeting thoughts, turning them into actionable insights. That’s revolutionary. It's about time we had a tool like this. Alright, enough talking to myself. Let’s get back to it and make VoicePal a reality.";

  // handle copy to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === "summary") {
          setIsSummaryCopied(true);
          setTimeout(() => setIsSummaryCopied(false), 2000);
        } else if (type === "transcript") {
          setIsTranscriptCopied(true);
          setTimeout(() => setIsTranscriptCopied(false), 2000);
        }
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="mx-auto px-4 max-w-xl py-10">
      <div className="mb-4">
        {/* Placeholder for Image */}
        <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
      <header>
        <h1 className="text-3xl font-bold leading-tight text-gray-800 mb-2">
          {audioLogTitle}
        </h1>
        <p className="text-xl text-gray-500">Recorded by {authorName}</p>
      </header>
      <main>
        <section className="my-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Audio</h2>
          <MediaPlayer />
        </section>
        <section className="my-5">
          <div className="flex items-center mb-2 justify-between">
            <h2 className="text-lg font-semibold text-gray-700 mr-2">
              Summary
            </h2>
            <button
              onClick={() => copyToClipboard(summary, "summary")}
              className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
            >
              {isSummaryCopied ? (
                <>
                  <RiCheckFill className="mr-1" />
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
          <p className="mt-2 text-gray-600">{summary}</p>
        </section>
        <section className="my-5">
          <div className="flex items-center mb-2 justify-between">
            <h2 className="text-lg font-semibold text-gray-700 mr-2">
              Transcript
            </h2>
            <button
              onClick={() => copyToClipboard(transcript, "transcript")}
              className="text-sm text-blue-500 hover:text-blue-700 flex items-center"
            >
              {isTranscriptCopied ? (
                <>
                  <RiCheckFill className="mr-1" size={20} />
                  Copied
                </>
              ) : (
                "Copy"
              )}
            </button>
          </div>
          <div className="mt-2 text-gray-600">{transcript}</div>
        </section>
      </main>
      {/* Badge at the bottom-right of the screen */}
      <a
        href="https://www.notion.so/VoicePal-49f60fa740024b9f95a61b63ed93ca81" // Replace with the actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md flex items-center"
      >
        <RiMicFill className="mr-1" size={20} />
        Recorded with VoicePal
      </a>
    </div>
  );
}
