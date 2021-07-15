const slidecaption = () => (
  `<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://naosusu.com/wp-content/uploads/2018/07/Popular-and-best-restaurants-in-Warri.jpg" class="d-block w-100 homepage" alt="first-image">
    <div class="carousel-caption d-none d-md-block font-weight">
      <h1>Basma</h1>
      <p>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" class="d-block w-100 homepage" alt="second image">
    <div class="carousel-caption d-none d-md-block font-weight">
    <h1>Basma</h1>
      <p>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block w-100 homepage" alt="third image">
    <div class="carousel-caption d-none d-md-block font-weight">
    <h1>Basma</h1>
      <p>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.</p>
    </div>
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`
);

const createHomePage = () => {
  const home = document.createElement('div');
  home.classList.add('position-relative');
  home.insertAdjacentHTML('beforeend', slidecaption());
  return home;
};

export default createHomePage;
