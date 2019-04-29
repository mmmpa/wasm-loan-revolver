export default function detectErrorMessage (key: string) {
  switch (key) {
  case 'NotEnough':
    return '返済額が利息を下回っているため、完済できません。';
  default:
    return 'Unknown error.';
  }
}
