export default function Footer() {
    return (
      <footer className="container is-fullhd">
        <section id="contact">
          <div className="columns mb-large">
            <div className="column is-8 is-align-items-flex-end">
              <h5 className='subtitle is-spaced mb-medium'><span className='accent'></span>Contact us</h5>
              <h2 className='title is-2 is-size-4-mobile'>Have a project in mind?<br />Let&apos;s make it happen</h2>
            </div>
            <div className="column is-size-5 is-4 is-flex is-align-items-flex-end">
              <p>
                22 Lawley Road, Woodstock, 7925,<br />
                Cape Town, South Africa<br />
                +27 21 469 1500<br />
                <a href='mailto:enquirie@kingjames.co.za'>enquirie@kingjames.co.za</a>
              </p>
            </div>
          </div>
          <div className="columns is-size-5 is-mobile is-flex-wrap-wrap">
            <div className="column">
              <ul>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Impressum</a>
                </li>
              </ul>
            </div>
            <div className="column is-half-mobile is-half-tablet  is-2-desktop">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="column is-half-mobile is-half-tablet is-2-desktop">
              <ul>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Teams</a>
                </li>
              </ul>
            </div>
            <div className="column is-half-mobile is-half-tablet is-2-desktop">
              <ul>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
              </ul>
            </div>
            <div className="column is-full-tablet is-one-third-desktop">
              <ul>
                <li className="has-text-centered-mobile">
                  <a href="#">Explore open jobs</a>
                </li>
                <li>
                  <span>&nbsp;</span>
                </li>
                <li className="has-text-centered-mobile">
                  <span>&copy;2000—2022 King James Digital</span>
                </li>
              </ul>
            </div>
          </div>
          
        </section>
      </footer>
    )
  }