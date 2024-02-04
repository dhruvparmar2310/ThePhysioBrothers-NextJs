import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <Link href="/" className="logo me-auto" title="ThePhysioBrothers Logo | ThePhysioBrothers">
            <img src="assets/img/new-logo-small.png" alt="ThePhysioBrothers Logo" />
          </Link>

          <nav id="navbar" classNameName="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto " href="#hero" data-bs-toggle="tooltip" title="Home Page | ThePhysioBrothers">Home</a></li>
              <li><a className="nav-link scrollto" href="#about" data-bs-toggle="tooltip" title="About Page | ThePhysioBrothers">About</a></li>
              <li><a className="nav-link scrollto" href="#blogs" data-bs-toggle="tooltip" title="Blogs Page | ThePhysioBrothers">Blogs</a></li>
              <li><a className="nav-link scrollto" href="#services" data-bs-toggle="tooltip" title="Services | ThePhysioBrothers">Services</a></li>
              <li><a className="nav-link scrollto" href="#doctors" data-bs-toggle="tooltip" title="Expert Doctors | Verified Physiotherapist">Doctors</a></li>
              <li><a className="nav-link scrollto" href="#gallery" data-bs-toggle="tooltip" title="Gallery | ThePhysioBrothers">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#pricing" data-bs-toggle="tooltip" title="Pricing | Plan | ThePhysioBrothers">Pricing</a></li>
              <li><a className="nav-link scrollto" href="#advance-box" data-bs-toggle="tooltip" title="Advance Therapy | Dry Needling | Cupping Therapy | Therapeutic Taping">Advance Therapy</a></li>
              <li><a className="nav-link scrollto" href="#contact" data-bs-toggle="tooltip" title="Contact Us | ThePhysioBrothers">Contact</a></li>
            </ul>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header
