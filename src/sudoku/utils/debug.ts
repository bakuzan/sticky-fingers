export default function debug(msg: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg);
  }
}
