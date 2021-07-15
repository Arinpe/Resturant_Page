const menu = `
<div class="container d-flex flex-wrap mt-3">
<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="https://allnigerianfoods.com/wp-content/uploads/indomie-noodles.jpg" alt="indomie">
  <div class="card-body">
   <h5>Indomie and Egg</h5>
    <p class="card-text">₦1,500.00/plate</p>
  </div>
</div>


<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="https://i.ytimg.com/vi/bq1sIV7RmyQ/maxresdefault.jpg" alt="Jollof rice">
  <div class="card-body">
   <h5>Jollof Rice</h5>
    <p class="card-text">₦1,000.00/plate</p>
  </div>
</div>


<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="https://i.ytimg.com/vi/j5f_DXIMbWA/mqdefault.jpg" alt="Pap">
  <div class="card-body">
   <h5>Pap and Akara</h5>
    <p class="card-text">₦2,500.00/plate</p>
  </div>
</div>

<div class="card m-2" style="width: 30rem;">
  <img class="card-img-top" src="https://broadwaybarandrestaurant.com/wp-content/uploads/IMG_7311.jpg" alt="Fried Rice">
  <div class="card-body">
   <h5>Fried Boiled Yam and Egg Sauce</h5>
    <p class="card-text">₦3,500.00/plate</p>
  </div>
</div>

</div>
`;

const renderMenu = () => {
  const container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', menu);
  return container;
};

export default renderMenu;
