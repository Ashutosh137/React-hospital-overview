import React from "react";
const section = (props) => {
  return (
    <>
      <section className="section text-center border-b-2 my-10  shadow-md" id="section">
        <h1 className="text-xl mx-10 font-semibold capitalize my-8 border-b-2 sm:text-4xl">
          welcome to {props.name}
        </h1>
        <div className="section flex m-auto p-1 align-middle">
          <div>
            <h1 className="text-basic font-semibold capitalize sm:text-2xl">
              who we are..
            </h1>
            <p className="px-6 text-xs sm:text-xl sm:px-20 py-1">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, animi sapiente! Est magni ea maioreslorem Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Molestiae officia
              illaepe eius! Soluta, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur doloribus consecte tempora rem
              quaerat quia aliquam repellat distinctio, optio molestiae illo
              doloremque.
              <br />
              <button className=" p-1 border-2 m-auto my-4 border-rose-800 border-double rounded-xl bg-red-400">
                About us
              </button>
            </p>
          </div>
        </div>
        <section className="section text-center mt-10 px-40" id="section">
          <div className="section m-auto px-1">
            <h1 className="text-xl capitalize sm:text-4xl">who we are</h1>
            <p className="px-3 text-xs sm:text-xl sm:px-20">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, animi sapiente! Est magni ea maioreslorem Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Molestiae officia
              illaepe eius! Soluta,Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Asperiores, animi sapiente! Est magni ea
              maioreslorem Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Molestiae officia illaepe eius! Soluta, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aspernatur doloribus
              consecte tempora rem quaeratLorem ipsum dolor sit amet consectetur
              adipisicing elit. Asperiores, animi sapiente! Est magni ea
              maioreslorem Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Molestiae officia illaepe eius! Soluta, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aspernatur doloribus
              consecte tempora rem quaerat Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur doloribus consecte
              tempora rem quaerat quia aliquam repellat distinctio, optio
              molestiae illo doloremque.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
export default section;
