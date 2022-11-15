import Image from 'next/image'
import Logo from '../public/img/logoKJD.svg'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='navbar container is-fullhd px-large' role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <Image
            src={Logo}
            alt='King James Digital Logo'
            height={32}
            width={53.29}
          />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start is-flex-grow-1 is-justify-content-center">
          
          <a className="navbar-item" href='#services'>
            Services
          </a>

          <a className="navbar-item" href="#">
            Industries
          </a>

          <a className="navbar-item" href="#cases">
            Cases
          </a>

          <a className="navbar-item" href='#contact'>
            Contact
          </a>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
              <a className="button is-rounded is-small is-light has-text-primary has-text-weight-bold">
                Let&apos;s Talk
              </a>
          </div>
        </div>
      </div>
    </nav>
  )
}