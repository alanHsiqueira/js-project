export default function fetchBitcoin(url, target) {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const btcPreco = document.querySelector(target);
      if (btcPreco && bitcoinJSON) {
        btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
      } else {
        console.log("Erro ao buscar o preço do bitcoin");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin();
}
