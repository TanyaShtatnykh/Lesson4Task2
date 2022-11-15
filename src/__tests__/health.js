import healthStatus from '../health';

test.each([
  ['John', 80, 'healthy'],
  ['Jack', 50, 'wounded'],
  ['Jule', 14, 'critical'],
])('testing health status function with %s name and %i value', (_, valueHealth, expectedStatus) => {
  const result = healthStatus(valueHealth);
  expect(result).toBe(expectedStatus);
});
