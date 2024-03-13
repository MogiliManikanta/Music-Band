import React from 'react'
import './f.css'

export default function Footer() {
  return (
    <div>
       <footer className="footer-distributed">

<div className="footer-left">
    <h3>The<span>Cyrus</span></h3>

    

    <p className="footer-company-name mt-5">Copyright © 2021 <strong>TheCyrus</strong> All rights reserved</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>AI & DS</span>
            Mogili Manikata</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 9989******</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:mogilimanikanta5555@gmail.com">thecyrus@csitdurg.in</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the Band</span>
        <strong>The Cyrus</strong> is a music band where you can nuture your music skills 
        and
        learn various instruments.
    </p>
    <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
    </div>
  )
}