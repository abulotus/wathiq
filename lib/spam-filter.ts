/**
 * Conservative link-spam heuristic: genuine inquiries essentially never contain
 * three or more URLs, but bulk spam/phishing submissions reliably do. Kept
 * narrow on purpose to avoid false-positiving real customer messages.
 */
const URL_PATTERN = /https?:\/\/|www\./gi;

export function looksLikeLinkSpam(message: string): boolean {
  const matches = message.match(URL_PATTERN);
  return !!matches && matches.length >= 3;
}
