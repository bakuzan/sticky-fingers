import { BorderClass } from '@/enums/BorderClass';

export default function getBorderClasses(square: string) {
  const [letter, num] = square.split('');
  const result: BorderClass[] = [];

  // Colour

  if (['A', 'D', 'G'].includes(letter)) {
    result.push(BorderClass.left);
  }

  if (['C', 'F', 'I'].includes(letter)) {
    result.push(BorderClass.right);
  }

  if (['1', '4', '7'].includes(num)) {
    result.push(BorderClass.top);
  }

  if (['3', '6', '9'].includes(num)) {
    result.push(BorderClass.bottom);
  }

  // Width

  if (num === '1') {
    result.push(BorderClass.thickTop);
  } else if (num === '9') {
    result.push(BorderClass.thickBottom);
  }

  if (letter === 'A') {
    result.push(BorderClass.thickLeft);
  } else if (letter === 'I') {
    result.push(BorderClass.thickRight);
  }

  return result.join(' ');
}
