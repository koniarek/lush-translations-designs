import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Designed by{' '}
       <a href="https://ks-finearts.com/">Szymon Koniarek</a>.
        </span>
      </div>
    </footer>
  </div>
)
