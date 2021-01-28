function cashRegister(obj) {
  return Object.keys(obj).reduce((cashRegister, key) => cashRegister + parseFloat(obj[key] || 0), 0);
}
const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

console.log(`Цена:${cashRegister(cartForParty)}`);

test('adds 1 + 2 to equal 3', () => {
  expect(cashRegister(cartForParty)).toBe("Цена:60.55");
});
