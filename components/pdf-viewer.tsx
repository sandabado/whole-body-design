"use client"

import { useCallback, useEffect, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

import { Button } from "@/components/ui/button"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`

interface PdfViewerProps {
  slug: string
  allowDownload?: boolean
}

export function PdfViewer({ slug, allowDownload = false }: PdfViewerProps) {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const disableContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault()
  }, [])

  const disableKeyboardShortcuts = useCallback((e: KeyboardEvent) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      ["s", "p", "u", "a"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("contextmenu", disableContextMenu)
    document.addEventListener("keydown", disableKeyboardShortcuts)
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu)
      document.removeEventListener("keydown", disableKeyboardShortcuts)
    }
  }, [disableContextMenu, disableKeyboardShortcuts])

  return (
    <div className="flex h-screen flex-col bg-obsidian">
      <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-gold/20 bg-amethyst px-6 py-3">
        <span className="font-mono text-sm text-gold">{slug}</span>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-moonstone/50">
            Page {pageNumber} of {numPages}
          </span>
          {allowDownload ? <Button size="sm">Download PDF</Button> : null}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto max-w-2xl">
          <Document
            file={`/api/r2/${slug}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex justify-center py-12">
                <p className="font-mono text-sm text-moonstone/50">
                  Loading...
                </p>
              </div>
            }
            error={
              <div className="flex justify-center py-12">
                <p className="font-mono text-sm text-ember">
                  Failed to load document.
                </p>
              </div>
            }
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={600}
                className="mb-4 shadow-2xl"
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}
