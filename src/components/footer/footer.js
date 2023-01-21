import React from "react";
import './footer.css';
class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
        <section className="footar ">
        <div className="footer-contact">
          <div className="footer">
            <h2>contact us on</h2>
            <label>call 23456-78329</label>
            <label>Lorem ipsum dolor sit amet.</label>
            <label htmlFor="email">info@gmail.com</label>
          </div>
          <div className="footer">
            <h2>locations</h2>
            <label htmlFor className="locatiion">location 1</label>
            <label htmlFor className="locatiion">location 2</label>
            <label htmlFor className="locatiion">location 3</label>
          </div>
          <div className="footer">
            <h2>quick links</h2>
            <a href="#home" className="social">home</a>
            <a href="#about" className="social">about</a>
            <a href="#department" className="social">department</a>
            <a href="#gallary" className="social">gallary</a>
          </div>
          <div className="footer">
            <h2>follow us</h2>
            <a href="https://www.facebook.com/" target="_blank" className="social">facebook</a>
            <a href="https://www.instragram.com" target="_blank" className="social">instragram</a>
            <a href="https://www.linkdin.com" target="_blank" className="social">linkdin</a>
            <a href="https://www.twiter.com" target="_blank" className="social">twiter</a>
          </div>
        </div>
      </section>
        );
    }
}
 
export default Footer;