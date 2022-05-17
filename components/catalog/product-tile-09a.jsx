export default function ProductTile09() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <picture>
            <a href="" title="Monochrome">
              <img src="/images/products/product-09a.jpg" alt="Monochrome" />
            </a>
          </picture>

          <span className="product-tile-badge">
            <a href="" title="Wishlist">
              <i className="fa-regular fa-heart"></i>
            </a>
          </span>
        </div>

        <h1 className="product-tile-title">
          <a href="" title="Monochrome">
            Monochrome
          </a>
        </h1>
      </header>

      <section className="product-tile-price">
        <span className="product-price">
          $<span>425</span>
        </span>
      </section>
    </article>
  );
}
