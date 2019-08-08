const __DEBUG__ = true;

export default function debug(msg) {
  if (__DEBUG__) {
    console.log(msg);
  }
}
