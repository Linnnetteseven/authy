// Add JS here// Example data for NFTs
// const nftData = [
//     { title: "#PoliticsBullshit", image: "https://placekitten.com/200/200", price: "1.00", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
//     { title: "#HollyGrail", image: "https://placekitten.com/201/201", price: "0.50", owner: "0x84550...aAff5B1", buttonText: "BUY" },
//     { title: "#BallesterArt", image: "https://placekitten.com/202/202", price: "0.15", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
//     { title: "#CrazyFrog", image: "https://placekitten.com/203/203", price: "", owner: "0x42437...784dCe2", buttonText: "OFFER" },
//     { title: "#FastFood", image: "https://placekitten.com/204/204", price: "0.30", owner: "0x84550...aAff5B1", buttonText: "BUY" },
//   ];

const nftData = [
  { title: "#PoliticalCircus", image: "images/bull_american_flag.png", price: "1.00", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
  { title: "#HollyGrail", image: "images/holly_grail.png", price: "0.50", owner: "0x84550...aAff5B1", buttonText: "BUY" },
  { title: "#BallesterArt", image: "images/ballesterart.png", price: "0.15", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
  { title: "#CrazyFrog", image: "images/crazy_frog.png", price: "", owner: "0x42437...784dCe2", buttonText: "OFFER" },
  { title: "#FastFood", image: "images/fast_food.png", price: "0.30", owner: "0x84550...aAff5B1", buttonText: "BUY" },
  { title: "#PoliticalCircus", image: "images/bull_american_flag.png", price: "1.00", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
  { title: "#HollyGrail", image: "images/holly_grail.png", price: "0.50", owner: "0x84550...aAff5B1", buttonText: "BUY" },
  { title: "#BallesterArt", image: "images/ballesterart.png", price: "0.15", owner: "0x42437...784dCe2", buttonText: "CANCEL" },
  { title: "#CrazyFrog", image: "images/crazy_frog.png", price: "", owner: "0x42437...784dCe2", buttonText: "OFFER" },
  { title: "#FastFood", image: "images/fast_food.png", price: "0.30", owner: "0x84550...aAff5B1", buttonText: "BUY" },
];

  
  // Function to dynamically create NFT cards and insert them into the DOM
  function renderNFTs() {
    const marketplace = document.querySelector('.marketplace');
  
    nftData.forEach(nft => {
      const card = document.createElement('div');
      card.classList.add('nft-card');
  
      card.innerHTML = `
        <img src="${nft.image}" alt="${nft.title}">
        <h3>${nft.title}</h3>
        <p>${nft.owner}</p>
        <p class="price">${nft.price ? `${nft.price} ETH` : ''}</p>
        <button class="${nft.buttonText.toLowerCase()}">${nft.buttonText}</button>
      `;
  
      marketplace.appendChild(card);
    });
  }
  
  // Call the function to render NFTs on page load
  renderNFTs();
  