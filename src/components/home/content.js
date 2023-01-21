import React from "react";
import './home.css';
class content1 extends React.Component {
    state = {  } 
    render() { 
        return (
            <section className="section" id="home">
            <div className="hospital">
              <h1>hospital name </h1>
            </div>
            <div className="image">
              <img src="New folder/building.jpg" alt="net error" />
            </div>
            <div className="about">
              <h1>life to health</h1>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, animi sapiente! Est magni ea
                maioreslorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae officia illum eligendi
                pariatur maiores doloribus nulla unde laboriosam sit esse vero, dolore atque eos dicta cupiditate sed
                tempore saepe porro nam aliquid distinctio ullam aut inventore. Rerum excepturi fugit debitis quisquam
                architecto? Aspernatur, sit!
                saepe eius! Soluta, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus
                consectetur, exercitationem, accusantium rerum quod labore ut recusandae nihil cupiditate sunt ullam,
                vero quaerat tempore? Nihil sed molestias quaerat obcaecati. omnis, tempora rem quaerat quia aliquam
                repellat distinctio, optio molestiae illo
                doloremque.</p>
              <input type="button" defaultValue="About us" href="#about" />
            </div>
          </section>
        );
    }
}
 
export default content1;