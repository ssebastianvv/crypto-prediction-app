import { Logo } from "./logo";

export function BrandTitle() {
  return (
    <div className="flex items-center">
      <Logo />
      <h1 className="text-2xl font-bold text-yellow-500 ml-0">Binance</h1>
    </div>
  );
}
