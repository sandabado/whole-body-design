"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play, SkipBack, SkipForward } from "lucide-react"

import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  accentColor?: string
  tracks: { duration?: string; src: string; title: string }[]
}

export function AudioPlayer({
  accentColor = "#2BA8A0",
  tracks,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0)
    }

    audio.addEventListener("timeupdate", updateTime)
    return () => audio.removeEventListener("timeupdate", updateTime)
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      if (audio.src !== new URL(activeTrack.src, window.location.href).href) {
        audio.src = activeTrack.src
      }
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const changeTrack = (index: number) => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTrack(index)
  }

  const nextTrack = () => {
    changeTrack((currentTrack + 1) % tracks.length)
  }

  const prevTrack = () => {
    changeTrack((currentTrack - 1 + tracks.length) % tracks.length)
  }

  const activeTrack = tracks[currentTrack]

  return (
    <div className="rounded-lg border border-gold/20 bg-gray-900/85 p-6">
      <audio ref={audioRef} onEnded={nextTrack} />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            Now Playing
          </p>
          <p className="mt-1 font-display text-lg text-moonstone">
            {activeTrack?.title}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            aria-label="Previous track"
            onClick={prevTrack}
            size="icon"
            type="button"
            variant="ghost"
          >
            <SkipBack className="h-4 w-4" style={{ color: accentColor }} />
          </Button>
          <Button
            aria-label={isPlaying ? "Pause track" : "Play track"}
            className="border-2"
            onClick={togglePlay}
            size="icon"
            style={{ borderColor: accentColor }}
            type="button"
            variant="outline"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" style={{ color: accentColor }} />
            ) : (
              <Play className="h-5 w-5" style={{ color: accentColor }} />
            )}
          </Button>
          <Button
            aria-label="Next track"
            onClick={nextTrack}
            size="icon"
            type="button"
            variant="ghost"
          >
            <SkipForward className="h-4 w-4" style={{ color: accentColor }} />
          </Button>
        </div>
      </div>

      <div className="mt-4 h-1 w-full rounded-full bg-moonstone/10">
        <div
          className="h-1 rounded-full transition-all"
          style={{ backgroundColor: accentColor, width: `${progress}%` }}
        />
      </div>

      <div className="mt-5 grid gap-1 sm:grid-cols-2">
        {tracks.map((track, index) => (
          <button
            className={`flex min-h-10 items-center justify-between rounded px-3 py-2 text-left font-body text-sm transition ${
              index === currentTrack
                ? "bg-moonstone/10 text-moonstone"
                : "text-moonstone/55 hover:text-moonstone"
            }`}
            key={track.title}
            onClick={() => changeTrack(index)}
            type="button"
          >
            <span>{track.title}</span>
            <span className="font-mono text-xs">
              {track.duration || "--:--"}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
