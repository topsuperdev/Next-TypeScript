export const toTimeAgo = (raw: String) =>
  raw
    .replace(' seconds', 's')
    .replace('a minute', '1m')
    .replace(' minutes', 'm')
    .replace('an hour', '1h')
    .replace(' hours', 'h')
    .replace(' days', 'd')
    .replace(' ago', '')
