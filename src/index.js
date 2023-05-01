export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Ошибка в описании');
    this.errors.set(2, 'Неправильный запрос');
    this.errors.set(3, 'Неизвестный формат');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    }
    return this.errors.get(code);
  }
}
