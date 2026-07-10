import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { type NextRequest, NextResponse } from "next/server"

import { auth } from "@/auth"

let r2Client: S3Client | null = null

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const fileName = (await params).file
  if (!/^[a-zA-Z0-9._-]+\.pdf$/.test(fileName)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 })
  }

  const accountId = process.env.R2_ACCOUNT_ID
  const accessKeyId = process.env.R2_ACCESS_KEY_ID
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY
  const bucket = process.env.R2_BUCKET_NAME

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    return NextResponse.json(
      { error: "Reader storage is not configured" },
      { status: 503 }
    )
  }

  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: `manuals/${fileName}`,
  })

  const signedUrl = await getSignedUrl(
    getR2Client({ accessKeyId, accountId, secretAccessKey }),
    command,
    { expiresIn: 60 }
  )

  return NextResponse.redirect(signedUrl)
}

function getR2Client({
  accessKeyId,
  accountId,
  secretAccessKey,
}: {
  accessKeyId: string
  accountId: string
  secretAccessKey: string
}) {
  r2Client ??= new S3Client({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    region: "auto",
  })

  return r2Client
}
