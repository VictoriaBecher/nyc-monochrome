import ProductTile01 from './catalog/product-tile-01a';
import ProductTile02 from './catalog/product-tile-02a';
import ProductTile03 from './catalog/product-tile-03a';
import ProductTile04 from './catalog/product-tile-04a';
import ProductTile09 from './catalog/product-tile-09a';
import ProductTile10 from './catalog/product-tile-10a';
import ProductTile11 from './catalog/product-tile-11a';
import ProductTile12 from './catalog/product-tile-12a';
import ProductTile13 from './catalog/product-tile-13a';
import ProductTile14 from './catalog/product-tile-14a';
import ProductTile15 from './catalog/product-tile-15a';
import ProductTile16 from './catalog/product-tile-16a';

import HomeAbout from './homepage/_home-about';

export default function Main() {
  return (
    <main className="content-main">
      <section className="mobile-banner d-lg-none">
        <div className="banner-inner container">
          <button className="button button-new button-sm button-uppercase">
            new in
          </button>
        </div>
      </section>

      <section className="home-catalog-preview container">
        <header>
          <h1 className="section-title d-none d-lg-block">New Stuff</h1>
          <h1 className="section-title d-lg-none">Spring Collection</h1>
        </header>

        <section className="product-tiles d-flex justify-content-between">
          <ProductTile01></ProductTile01>

          <ProductTile02></ProductTile02>

          <ProductTile03></ProductTile03>

          <ProductTile04></ProductTile04>
        </section>
      </section>

      <section className="home-catalog-preview container">
        <header>
          <h1 className="section-title d-none d-lg-block">Most Loved</h1>
          <h1 className="section-title d-lg-none">Best reviewed</h1>
        </header>

        <section className="product-tiles d-flex justify-content-between">
          <ProductTile04></ProductTile04>

          <ProductTile01></ProductTile01>

          <ProductTile03></ProductTile03>

          <ProductTile02></ProductTile02>
        </section>
      </section>

      <HomeAbout></HomeAbout>

      <section className="home-catalog-preview container">
        <header>
          <h1 className="section-title">Mens</h1>
        </header>

        <section className="product-tiles  d-flex justify-content-between">
          <ProductTile09></ProductTile09>

          <ProductTile10></ProductTile10>

          <ProductTile11></ProductTile11>

          <ProductTile12></ProductTile12>
        </section>

        <footer className="products-cta d-none d-lg-block">
          <a href="" title="View all">
            view all
          </a>
        </footer>
      </section>

      <section className="home-catalog-preview container">
        <header>
          <h1 className="section-title">Womens</h1>
        </header>

        <section className="product-tiles  d-flex justify-content-between">
          <ProductTile13></ProductTile13>

          <ProductTile14></ProductTile14>

          <ProductTile15></ProductTile15>

          <ProductTile16></ProductTile16>
        </section>

        <footer className="products-cta">
          <a href="" title="View all">
            view all
          </a>
        </footer>
      </section>
    </main>
  );
}
