export default function Footer() {
  return (
    <footer className="footer pt-lg-3">
      <section className="footer-inner container">
        <section className="footer-contact d-none d-lg-block">
          <ul>
            <li>call us</li>

            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:" title="Email us">
                email customer care
              </a>
            </li>

            <li>
              <a href="" title="Mobile version">
                see mobile version
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <h1 className="d-lg-none my-4">How can we help?</h1>
          <div className="footer-nav-menu">
            <ul>
              <li className="d-none d-lg-block">
                <a href="" title="style & fit advice">
                  style & fit advice
                </a>
              </li>

              <li className="d-lg-none">
                <a href="" title="style & fit">
                  style & fit
                </a>
              </li>

              <li>
                <a href="" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="" title="delivery">
                  delivery
                </a>
              </li>

              <li className="d-none d-lg-block">
                <a href="" title="exchanges & returns">
                  exchanges & returns
                </a>
              </li>

              <li className="d-lg-none">
                <a href="" title="exchanges & returns">
                  returns
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="" title="abount us">
                  abount us
                </a>
              </li>

              <li>
                <a href="" title="careers">
                  careers
                </a>
              </li>

              <li>
                <a href="" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="" title="advertising">
                  advertising
                </a>
              </li>
            </ul>
          </div>
          <p className="footer-terms mt-5 mb-4 d-flex flex-column align-items-center fst-italic text-decoration-underline d-lg-none">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="terms&conditions"
            >
              terms & conditions
            </a>

            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              title="privacy & cookies"
            >
              privacy & cookies
            </a>
          </p>
        </nav>

        <section className="footer-connect">
          <section className="footer-newsletter">
            <h1 className="d-lg-none my-4">Let's connect</h1>
            <label htmlFor="email" className="d-lg-none mb-2">
              Be the first to receive exclusives offers
            </label>

            <label htmlFor="email" className="d-none d-lg-block">
              sign up for our newsletter
            </label>

            <form
              action=""
              className="d-flex flex-column align-items-center gap-4 gap-lg-2"
            >
              <input
                className="d-lg-none"
                type="email"
                name="email"
                id="email"
                placeholder="email"
              />
              <input
                className="d-none d-lg-block"
                type="email"
                name="email"
                id="email"
                placeholder=""
              />
              <button
                className="button-submit"
                type="submit"
                title="submit"
                name="submit"
              >
                Submit
              </button>
            </form>

            <p className="d-lg-none mt-4 mb-2">
              I agree with &nbsp;{' '}
              <a
                className="text-decoration-underline"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
              &nbsp; and i want to receive emails from Monochrome
            </p>
          </section>

          <section className="footer-social">
            <h1 className="d-lg-none my-4">We are highly likeable</h1>
            <ul className="mb-3 my-lg-4">
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
            </ul>
          </section>
        </section>
      </section>
    </footer>
  );
}
