export default function Header() {
  return (
    <header className="header">
      <section className="header-secondary">
        <section className="header-secondary-inner container">
          <div className="header-connect d-none d-lg-block mt-4">
            <ul>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789" title="Call us">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-site-name d-lg-none mt-4 mb-2">
            <h1>monochrome</h1>
          </div>

          <div className="header-controls mt-4">
            <ul>
              <li>
                <form
                  action=""
                  className="header-search-controls d-none d-lg-block"
                >
                  <button type="submit" className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    title="search"
                    placeholder="Search"
                  />
                </form>
              </li>

              <li>
                <a href="" title="My account">
                  <i className="fa-regular fa-user"></i>
                </a>
              </li>

              <li>
                <a href="" title="Wish list">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="" title="Shopping-bag-controls">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="header-primary mb-lg-4">
        <div className="header-primary-navigation container">
          <section className="header-primary-mobile d-lg-none">
            <div className="header-primary-menu-bars">
              <a href="" title="Menu"></a>
              <i className="fa-solid fa-bars"></i>
            </div>

            <form action="" className="header-primary-search my-3">
              <input
                type="text"
                name="search-primary"
                id="search-primary"
                title="search-primary"
                placeholder="search"
              />
              <button type="submit" className="search-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </section>

          <nav className="nav-primary d-none d-lg-block">
            <ul className="d-flex flex-row justify-content-between">
              <li>
                <a href="" title="New Arrivals">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="" title="Men's">
                  Men's
                </a>
              </li>

              <li>
                <a href="" title="Women's">
                  Women's
                </a>
              </li>

              <li>
                <a href="" title="Accesories">
                  Accesories
                </a>
              </li>

              <li>
                <a href="" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="header-mobile-banner d-lg-none">
        <div className="header-banner-inner container">
          <button className="button button-new button-sm button-uppercase">
            new in
          </button>
        </div>
      </section>
    </header>
  );
}
