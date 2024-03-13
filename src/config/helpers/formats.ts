

export class Formatter {
  public static dateFormat = (date: Date) => new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  public static currencyFormat = (value: number) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
  }).format(value);

}
