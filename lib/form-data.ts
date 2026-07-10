import "server-only"

export function cleanOptional(value: FormDataEntryValue | null | unknown) {
  if (typeof value !== "string") return null

  const trimmed = value.trim()
  return trimmed ? trimmed : null
}

export function cleanRequired(value: FormDataEntryValue | null | unknown) {
  return cleanOptional(value) || ""
}

export function appendNoteFields(
  note: string | null,
  fields: Array<[label: string, value: string | null]>
) {
  const extra = fields
    .filter((field): field is [string, string] => Boolean(field[1]))
    .map(([label, value]) => `${label}: ${value}`)

  return [note, ...extra].filter(Boolean).join("\n\n") || null
}
