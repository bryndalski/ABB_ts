export default function textReducer(
  shortText: string,
  redudeNumber?: number,
): string {
  if (shortText.length > 57) {
    shortText = shortText.slice(0, 60)
    shortText = `${shortText}...`
  }
  return shortText
}
