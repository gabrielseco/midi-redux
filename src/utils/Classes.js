export default function classes (obj) {
  return Object.keys(obj)
    .map(key => obj[key] ? key : '')
    .join(' ')
    .trim();
}