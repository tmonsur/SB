
it('should calculate the monthly rate correctly', function() {
  // ...
  const calculation = {
    amount: 6000,
    years: 5,
    rate: 4.4
  };
  expect(calculateMonthlyPayment(calculation)).toEqual('111.59');
});


it("should return a result with 2 decimal places", function() {
  const calculation = {
    amount: 5000,
    years: 9,
    rate: 2.2
  };
  expect(calculateMonthlyPayment(calculation)).toEqual('51.07');
});

it("should handle high ammount", function() {
  const calculation = {
    amount: 100000,
    years: 25,
    rate: 5.5
  };
  expect(calculateMonthlyPayment(calculation)).toEqual('614.09');
});
