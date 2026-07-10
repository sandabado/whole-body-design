import Link from "next/link"

import { AudioPlayer } from "@/components/audio-player"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const tracks = [
  { duration: "3:45", src: "/audio/ground.mp3", title: "Ground" },
  { duration: "4:12", src: "/audio/flow.mp3", title: "Flow" },
  { duration: "5:01", src: "/audio/spark.mp3", title: "Spark" },
  { duration: "3:33", src: "/audio/mirror.mp3", title: "Mirror" },
  { duration: "4:28", src: "/audio/sound.mp3", title: "Sound" },
  { duration: "6:15", src: "/audio/voice.mp3", title: "Voice" },
  { duration: "4:50", src: "/audio/story.mp3", title: "Story" },
  { duration: "3:58", src: "/audio/gather.mp3", title: "Gather" },
  { duration: "5:22", src: "/audio/wisdom.mp3", title: "Wisdom" },
  { duration: "4:10", src: "/audio/law.mp3", title: "Law" },
  { duration: "3:47", src: "/audio/future.mp3", title: "Future" },
  { duration: "7:33", src: "/audio/tribe.mp3", title: "Tribe" },
]

export default function VolumeOnePage() {
  return (
    <>
      <SiteNav />
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.3em] text-teal">
            WHOLE BODY RECORDS
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-moonstone">
            The Living Earth: Volume 1
          </h1>
          <p className="mt-4 max-w-2xl text-moonstone/70">
            Twelve tracks. Twelve Houses. Twelve Framers. The player is wired;
            audio files can be dropped into{" "}
            <span className="font-mono">/public/audio</span>.
          </p>
          <Card className="mt-10 bg-gray-900/85 p-6">
            <AudioPlayer tracks={tracks} accentColor="#2BA8A0" />
          </Card>
          <Button variant="teal" className="mt-8" asChild>
            <Link href="/store">Order Vinyl</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}
