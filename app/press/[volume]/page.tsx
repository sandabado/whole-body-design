import { redirect } from "next/navigation"

export default async function LegacyPressVolumePage({
  params,
}: {
  params: Promise<{ volume: string }>
}) {
  const { volume } = await params
  redirect(`/manuals/${volume}`)
}
