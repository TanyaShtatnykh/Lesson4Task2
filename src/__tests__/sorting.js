import sortingPlayers from '../sorting';

test('sort 3 players', () => {
  const players = [
    { name: 'Jule', health: 14 },
    { name: 'John', health: 80 },
    { name: 'Jack', health: 50 }
  ];
  const result = [
    { name: 'John', health: 14 },
    { name: 'Jack', health: 50 },
    { name: 'Jule', health: 80 }
  ];
  expect(sortingPlayers(players)).toEqual(result);
});