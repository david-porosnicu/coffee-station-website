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
      // Optionally, you can initialize or configure here
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

  const startCall = async () => {
    if (!window.vapiSDK) {
      console.error("Vapi SDK not loaded");
      return;
    }
    if (!VAPI_API_KEY || !VAPI_BOT_ID) {
      console.error("Vapi API key or Bot ID not configured");
      return;
    }
    setIsConnecting(true);
    setTranscript([]);

    console.log("VAPI_API_KEY", VAPI_API_KEY);
    console.log("VAPI_BOT_ID", VAPI_BOT_ID);
    console.log("window.vapiSDK", window.vapiSDK);

    window.vapiSDK.run({
      apiKey: VAPI_API_KEY,
      assistant: VAPI_BOT_ID,
      config: {
        widget: {
          position: "bottom-right",
          size: "large",
        },
      },
    });
    setIsCallActive(true);
    setIsConnecting(false);
    callStartTime.current = new Date();
    startDurationTimer();
    onCallStart?.();
  };

  const endCall = () => {
    // The CDN widget may not expose a stop method; if it does, call it here
    setIsCallActive(false);
    setIsConnecting(false);
    stopDurationTimer();
    onCallEnd?.();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // The CDN widget may not expose mute control; if it does, call it here
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
    // The CDN widget may not expose speaker control; if it does, call it here
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
            <Phone className="h-12 w-12 mx-auto mb-4 text-gray-300" />
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

      {/* Controls */}
      <div className="p-6">
        <div className="flex items-center justify-center space-x-4">
          {!isCallActive && !isConnecting ? (
            <button
              onClick={startCall}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition-colors duration-200 shadow-lg"
            >
              <Phone className="h-6 w-6" />
            </button>
          ) : (
            <>
              <button
                onClick={toggleMute}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isMuted
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {isMuted ? (
                  <MicOff className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={endCall}
                disabled={isConnecting}
                className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full transition-colors duration-200 shadow-lg disabled:opacity-50"
              >
                <PhoneOff className="h-6 w-6" />
              </button>

              <button
                onClick={toggleSpeaker}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isSpeakerOn
                    ? "bg-coffee-600 hover:bg-coffee-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {isSpeakerOn ? (
                  <Volume2 className="h-5 w-5" />
                ) : (
                  <VolumeX className="h-5 w-5" />
                )}
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {!isCallActive &&
              !isConnecting &&
              "Click the phone icon to start talking with our AI assistant"}
            {isConnecting && "Connecting to our voice assistant..."}
            {isCallActive && "Speak naturally - our AI assistant is listening"}
          </p>
        </div>
      </div>
    </div>
  );
}
