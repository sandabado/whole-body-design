import { redirect } from "next/navigation"

import { auth } from "@/auth"
import { PdfViewer } from "@/components/pdf-viewer"

export default async function AccountReaderPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const session = await auth()
  if (!session?.user) redirect("/sign-in?redirect=/account/library")

  return <PdfViewer slug={slug} allowDownload={false} />
}
