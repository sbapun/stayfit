const createSmallCards = (data) => {
  return `
    <div class="sm-product">
       <img src="${data.image}" class="sm-product-img" alt="" />
  
      <div class="sm-text">
       <p class="sm-product-name">${data.name}</p>
      <p class="sm-des">${data.shortDes}</p>
      </div>
    <div class="item-counter">
      <p class="item-count">${data.item}</p>
    </div>
    <p class="sm-price" data-price ="${data.sellPrice}">₹${
    data.sellPrice * data.item
  }</p>
  </div>
      `;
};
