import { BorderClass } from '@/enums/BorderClass';
import { BorderThickClass } from '@/enums/BorderThickClass';

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
    result.push(BorderThickClass.top);
  } else if (num === '9') {
    result.push(BorderThickClass.bottom);
  }

  if (letter === 'A') {
    result.push(BorderThickClass.left);
  } else if (letter === 'I') {
    result.push(BorderThickClass.right);
  }

  return result.join(' ');
}
