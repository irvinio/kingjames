import Image from 'next/image'
import Logo from '../public/img/logoKJD.svg'
import Link from 'next/link'

let togglemenu = () => {
  const mobilemenu = document.querySelector("#navMenu");

  if (mobilemenu.classList.contains('fade-out') || !mobilemenu.classList.contains('fade-in')) {
      mobilemenu.classList.add('fade-in');
      mobilemenu.classList.remove('fade-out');
      console.log('fade-in');
  }
  else {
    mobilemenu.classList.add('fade-out');
    mobilemenu.classList.remove('fade-in');
    console.log('fade-out');
  }

}

export default function Navbar() {
  return (
    <nav className='navbar container is-fullhd' role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <Image
            src={Logo}
            alt='King James Digital Logo'
            height={32}
            width={53.29}
          />
        </Link>

        <a role="button" className="navbar-burger" onClick={() => togglemenu()} aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu fade-out">
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
              <a className="button is-rounded is-small is-light has-text-primary has-text-weight-bold" href="#">
                Let&apos;s Talk
              </a>
          </div>
        </div>
      </div>
    </nav>
  )
}