"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX } from "lucide-react";

const VAPI_API_KEY = process.env.NEXT_PUBLIC_VAPI_API_KEY;
const VAPI_BOT_ID = process.env.NEXT_PUBLIC_VAPI_BOT_ID;

// Add this declaration to fix linter errors for window.vapiSDK
declare global {
  interface Window {
    vapiSDK?: any;
  }
}

interface CallWidgetProps {
  onCallStart?: () => void;
  onCallEnd?: () => void;
}

interface TranscriptMessage {
  id: string;
  text: string;
  timestamp: Date;
  speaker: "user" | "assistant";
}

export default function CallWidget({
  onCallStart,
  onCallEnd,
}: CallWidgetProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  const transcriptRef = useRef<HTMLDivElement>(null);
  const callStartTime = useRef<Date | null>(null);
  const durationInterval = useRef<NodeJS.Timeout | null>(null);
  const vapiScriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Load Vapi SDK from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.defer = true;
    script.async = true;
    vapiScriptRef.current = script;

    script.onload = function () {
      if (window.vapiSDK) {
        window.vapiSDK.run({
          apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY,
          assistant: process.env.NEXT_PUBLIC_VAPI_BOT_ID,
          config: {
            widget: {
              position: "bottom-right",
              size: "large",
              openOnLoad: true,
            },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vapiScriptRef.current) {
        vapiScriptRef.current.remove();
      }
      stopDurationTimer();
    };
  }, []);

  const startDurationTimer = () => {
    durationInterval.current = setInterval(() => {
      if (callStartTime.current) {
        const now = new Date();
        const duration = Math.floor(
          (now.getTime() - callStartTime.current.getTime()) / 1000
        );
        setCallDuration(duration);
      }
    }, 1000);
  };

  const stopDurationTimer = () => {
    if (durationInterval.current) {
      clearInterval(durationInterval.current);
      durationInterval.current = null;
    }
    setCallDuration(0);
    callStartTime.current = null;
  };

  const addTranscriptMessage = (
    text: string,
    speaker: "user" | "assistant"
  ) => {
    const newMessage: TranscriptMessage = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      speaker,
    };
    setTranscript((prev) => [...prev, newMessage]);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-coffee-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Voice Assistant</h2>
            <p className="text-coffee-100">
              {isCallActive
                ? `Connected • ${formatDuration(callDuration)}`
                : isConnecting
                ? "Connecting..."
                : "Ready to connect"}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {isCallActive && (
              <div className="flex items-center space-x-2 bg-coffee-700 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transcript */}
      <div
        ref={transcriptRef}
        className="h-64 overflow-y-auto p-4 bg-gray-50 border-b"
      >
        {transcript.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>Start a call to see the conversation transcript</p>
          </div>
        ) : (
          <div className="space-y-3">
            {transcript.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.speaker === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.speaker === "user"
                      ? "bg-coffee-600 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.speaker === "user"
                        ? "text-coffee-200"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
