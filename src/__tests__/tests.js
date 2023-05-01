import ErrorRepository from '../index';

test.each([
  { a: 1, expected: 'Ошибка в описании' },
  { a: 2, expected: 'Неправильный запрос' },
  { a: 3, expected: 'Неизвестный формат' },
])('ErrorRepository translate', ({ a, expected }) => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(a)).toBe(expected);
});

test('ErrorRepository translate error', () => {
  expect(() => {
    const errorRepository = new ErrorRepository();
    errorRepository.translate(4);
  }).toThrow(new Error('Unknown error'));
});
