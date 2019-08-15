import { KeyCodes } from '@/enums/KeyCodes';

function createListeners(event: string, handler: (e: Event) => void) {
  document.addEventListener(event, handler);
  return () => document.removeEventListener(event, handler);
}

export default function addOutsideClick(
  element: HTMLElement,
  onOutsideClick: (e: Event) => void
) {
  function handleClick(event: Event) {
    const isDescendantOfRoot = element.contains(event.target as HTMLElement);

    if (!isDescendantOfRoot) {
      onOutsideClick(event);
    }
  }

  function handleKeyDown(event: Event) {
    const e = event as KeyboardEvent;
    if (KeyCodes.escape === e.code) {
      onOutsideClick(event);
    }
  }

  const keyCtrlRemove = createListeners('keydown', handleKeyDown);
  const clickCtrlRemove = createListeners('click', handleClick);

  return () => {
    keyCtrlRemove();
    clickCtrlRemove();
  };
}
