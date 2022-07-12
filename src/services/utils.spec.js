import {selectLevels, selectCards} from './utils';
const cards = [
  {card_id: 1, level: 2},
  {
    card_id: 2,
    level: 1,
  },
  {
    card_id: 3,
    level: 7,
  },
  {
    card_id: 4,
    level: 3,
  },
  {card_id: 5, level: 6},
  {
    card_id: 6,
    level: 5,
  },
  {
    card_id: 7,
    level: 4,
  },
];
describe('selectLevels', () => {
  test.each`
    input  | expectedResult
    ${1}   | ${[1, 2]}
    ${2}   | ${[1, 3]}
    ${3}   | ${[1, 2]}
    ${4}   | ${[1, 4]}
    ${5}   | ${[1, 2]}
    ${6}   | ${[1, 3]}
    ${7}   | ${[1, 2]}
    ${8}   | ${[1]}
    ${9}   | ${[1, 2]}
    ${10}  | ${[1, 3]}
    ${11}  | ${[1, 2]}
    ${12}  | ${[1, 5]}
    ${13}  | ${[1, 2, 4]}
    ${14}  | ${[1, 3]}
    ${15}  | ${[1, 2]}
    ${16}  | ${[1]}
    ${24}  | ${[1, 6]}
    ${59}  | ${[1, 2, 6]}
    ${56}  | ${[1, 7]}
    ${78}  | ${[1, 3]}
    ${97}  | ${[1, 2]}
    ${113} | ${[1, 2]}
  `(
    'outputs $expectedResult when $input is used',
    ({input, expectedResult}) => {
      expect(selectLevels(input)).toStrictEqual(expectedResult);
    },
  );
});
describe('selectCards', () => {
  it('selects cards whose levels are 1 or 2', () => {
    const result = [
      {card_id: 1, level: 2},
      {card_id: 2, level: 1},
    ];
    expect(selectCards([1, 2], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1 or 3', () => {
    const result = [
      {card_id: 2, level: 1},
      {card_id: 4, level: 3},
    ];
    expect(selectCards([1, 3], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1 or 4', () => {
    const result = [
      {card_id: 2, level: 1},
      {card_id: 7, level: 4},
    ];
    expect(selectCards([1, 4], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1', () => {
    const result = [{card_id: 2, level: 1}];
    expect(selectCards([1], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1 or 5', () => {
    const result = [
      {card_id: 2, level: 1},
      {card_id: 6, level: 5},
    ];
    expect(selectCards([1, 5], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1, 2 or 4', () => {
    const result = [
      {card_id: 1, level: 2},
      {card_id: 2, level: 1},
      {card_id: 7, level: 4},
    ];
    expect(selectCards([1, 2, 4], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1 or 6', () => {
    const result = [
      {card_id: 2, level: 1},
      {card_id: 5, level: 6},
    ];
    expect(selectCards([1, 6], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1, 2 or 6', () => {
    const result = [
      {card_id: 1, level: 2},
      {card_id: 2, level: 1},
      {card_id: 5, level: 6},
    ];
    expect(selectCards([1, 2, 6], cards)).toStrictEqual(result);
  });
  it('selects cards whose levels are 1 or 7', () => {
    const result = [
      {card_id: 2, level: 1},
      {card_id: 3, level: 7},
    ];
    expect(selectCards([1, 7], cards)).toStrictEqual(result);
  });
});
