import game from '../app';

test('health condition of the player', () => {
  const testPlayer = {name: "Чародей", health: 90};
  const result = game(testPlayer);
  expect(result).toBe('healthy');
});

test('health condition of the player', () => {
  const testPlayer =  {name: "Маг", health: 45};
  const result = game(testPlayer);
  expect(result).toBe('wounded');
});


test('health condition of the player', () => {
  const testPlayer = {name: "Чародей", health: 12};
  const result = game(testPlayer);
  expect(result).toBe('critical');
});
