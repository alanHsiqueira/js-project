export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch("https://blockchain.info/ticker");
      const bitcoinJSON = await bitcoinResponse.json();
      const btcPreco = document.querySelector(".btc-preco");
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
