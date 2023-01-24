import React from "react";
class Home extends React.Component {
  render() {
    return (
      <home className="home flex justify-between text-center py-5 bg-orange-100 -mx-4" id="home">
        <div className="about z-50 bg-transparent">
          <h1 className="text-4xl py-5">life to health</h1>
          <p className=" text-2xl px-3 mx-40 opacity-100 ">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, animi sapiente! Est magni ea maioreslorem Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Molestiae officia
            illaepe eius! Soluta,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            doloribus consectetur, exercitationem, accusantium rerum quod labore
            ut recusandae nihil cupiditate sunt ullam, vero quaerat tempore?
            Nihil sed molestias quaerat obcaecati. omnis, tempora rem quaerat
            quia aliquam repellat distinctio, optio molestiae illo doloremque.
          </p></div>
        <img className="w-96 h-96 border-4 box-border shadow-2xl shadow-white" src="New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg" alt="net error" />
      </home>
    );
  }
}

export default Home;
