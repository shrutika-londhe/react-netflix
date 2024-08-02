import React from 'react'
import classes from '../Footer/footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_icons}>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className={classes.copyright}>&copy; 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer