export default function healthStatus(valueHealth) {
  if (valueHealth > 50) {
    return 'healthy';
  }
  if (valueHealth >= 15 && valueHealth <= 50) {
    return 'wounded';
  }
  if (valueHealth < 15) {
    return 'critical';
  }
  return 0;
}
