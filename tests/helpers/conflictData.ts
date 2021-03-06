const initial = {
  A3: '7',
  A4: '5',
  A7: '8',
  B1: '5',
  B5: '1',
  B8: '7',
  B9: '9',
  C1: '8',
  C4: '9',
  C5: '7',
  C8: '1',
  D1: '7',
  D3: '6',
  D5: '5',
  D9: '3',
  E2: '2',
  E5: '4',
  E7: '1',
  F2: '1',
  F3: '5',
  F7: '6',
  G2: '5',
  G4: '4',
  G6: '3',
  G8: '8',
  G9: '6',
  H3: '8',
  H6: '9',
  H8: '3',
  I1: '6',
  I5: '8',
  I7: '2',
  E9: '7',
  A6: '2',
  I2: '4'
};

const solution = {
  A1: '1',
  A2: '9',
  A3: '7',
  A4: '5',
  A5: '3',
  A6: '2',
  A7: '8',
  A8: '6',
  A9: '4',
  B1: '5',
  B2: '6',
  B3: '2',
  B4: '8',
  B5: '1',
  B6: '4',
  B7: '3',
  B8: '7',
  B9: '9',
  C1: '8',
  C2: '3',
  C3: '4',
  C4: '9',
  C5: '7',
  C6: '6',
  C7: '5',
  C8: '1',
  C9: '2',
  D1: '7',
  D2: '8',
  D3: '6',
  D4: '2',
  D5: '5',
  D6: '1',
  D7: '9',
  D8: '4',
  D9: '3',
  E1: '3',
  E2: '2',
  E3: '9',
  E4: '6',
  E5: '4',
  E6: '8',
  E7: '1',
  E8: '5',
  E9: '7',
  F1: '4',
  F2: '1',
  F3: '5',
  F4: '3',
  F5: '9',
  F6: '7',
  F7: '6',
  F8: '2',
  F9: '8',
  G1: '9',
  G2: '5',
  G3: '1',
  G4: '4',
  G5: '2',
  G6: '3',
  G7: '7',
  G8: '8',
  G9: '6',
  H1: '2',
  H2: '7',
  H3: '8',
  H4: '1',
  H5: '6',
  H6: '9',
  H7: '4',
  H8: '3',
  H9: '5',
  I1: '6',
  I2: '4',
  I3: '3',
  I4: '7',
  I5: '8',
  I6: '5',
  I7: '2',
  I8: '9',
  I9: '1'
};

export default {
  initial,
  solution,
  // 1 in A8
  scene1: {
    errors: [
      {
        unit: ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8'],
        errorFields: ['C8', 'A8']
      },
      {
        unit: ['A7', 'A8', 'A9', 'B7', 'B8', 'B9', 'C7', 'C8', 'C9'],
        errorFields: ['C8', 'A8']
      },
      {
        unit: ['A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8'],
        errorFields: ['A8', 'C8']
      },
      {
        unit: ['A7', 'A8', 'A9', 'B7', 'B8', 'B9', 'C7', 'C8', 'C9'],
        errorFields: ['A8', 'C8']
      }
    ],
    mistakes: ['A8']
  },
  // 1 in H9
  scene2: {
    errors: [],
    mistakes: ['H9']
  }
};
