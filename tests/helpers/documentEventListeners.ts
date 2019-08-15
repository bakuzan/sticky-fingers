export default function mockDocumentEventListeners() {
  const trigger: any = {};
  const mockedAddListenerFn = jest.fn((event, cb) => {
    trigger[event] = cb;
  });

  document.addEventListener = mockedAddListenerFn;

  return { trigger, mockedAddListenerFn };
}
