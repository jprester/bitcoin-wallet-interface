import fetch from "node-fetch";

export default async function getCryptoValue() {
  const cryptoValuePromise = await fetch("https://blockchain.info/ticker", {
    method: "GET",
  });

  const cryptoValue = await cryptoValuePromise.json();

  return cryptoValue.USD.last || "";
}
