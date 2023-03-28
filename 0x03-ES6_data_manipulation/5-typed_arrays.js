export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}

/*
export defaul function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position out of range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;
  return buffer;
}
  * */
