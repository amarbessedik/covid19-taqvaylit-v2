import React, { useState, useEffect } from "react";
import "./Tapp.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./parts/Navbar/Navbar";
import SidebarMenu from "./parts/Navbar/SidebarMenu";

const Tapp = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [screenBreakpoint, setScreenBreakpoint] = useState(false);

  const handleToggleLinks = () => {
    window.innerWidth <= 768 ? setToggleLinks(true) : setToggleLinks(false);
  };

  const handleBreakpoint = ()=>{
       window.innerWidth > 500 ? setScreenBreakpoint(true) : setScreenBreakpoint(false);
  }

  const handleDropdownToggling = () => {
    if (!dropdownToggle && window.pageYOffset > 315) {
      setDropdownToggle(true);
    } else if (dropdownToggle && window.pageYOffset <= 315) {
      setDropdownToggle(false);
    }
  };

  const updateSidebarVisibility = () =>{
      setSidebarVisible(!sidebarVisible);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleDropdownToggling);
    window.addEventListener("resize", handleToggleLinks);
    window.addEventListener("load", handleToggleLinks);
    window.addEventListener("resize", handleBreakpoint);
    window.addEventListener("load", handleBreakpoint);
  }, [dropdownToggle]);

  const dropdownToggler__top = {
    display: dropdownToggle ? "flex" : "none",
    transition: "all ease-in-out 500ms",
  };
  const dropdownToggler__bottom = {
    display: dropdownToggle ? "none" : "flex",
    transition: "all ease-in-out 500ms",
  };

  return (
    <div className="app">
      <SidebarMenu
        sidebarVisible={sidebarVisible}
        dropdownTopVisible={dropdownToggle}
        screenBreakpoint={screenBreakpoint}
      />

      <Navbar
        updateSidebarVisibility={updateSidebarVisibility}
        toggleLinks={toggleLinks}
        dropdownToggle={dropdownToggler__top}
      />

      <div className="app__stats">
        <div className="map">
          <h1>map</h1>
        </div>
        <div
          id="dropdown__bottom"
          className="dropdown"
          style={dropdownToggler__bottom}
        >
          <h1>dropdown</h1>
        </div>
        <div className="app__stats__content">
          <div className="app__left">
            <div className="app__left__stats">
              <h1>stats</h1>
            </div>
            <div className="app__left__table">
              <h1>table</h1>
            </div>
            <div className="app__left__graph">
              <h1>graph</h1>
            </div>
          </div>
          <div className="app__right">
            <h1>app right</h1>
          </div>
        </div>
      </div>
      <div className="app__bottom">
        <div className="about">
          <h1>about</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            soluta eius repellendus illum voluptatem, omnis dolor reprehenderit,
            ipsum molestiae iusto ratione veniam enim? Veritatis vitae debitis
            totam ipsam, consectetur maxime. Molestiae asperiores labore officia
            hic mollitia sit, blanditiis esse necessitatibus suscipit minima et
            consequatur ex non quas accusantium! Sint, sunt quaerat nesciunt
            dolorem suscipit quibusdam ducimus molestiae voluptatibus porro
            necessitatibus! Tenetur illum culpa corporis mollitia assumenda ea
            commodi alias repellendus impedit, a necessitatibus atque ad
            placeat, vero tempora voluptatibus non error exercitationem voluptas
            nam iste possimus deserunt! Doloribus, dolores odit! Eius,
            exercitationem magnam enim aperiam modi id ipsa voluptates
            asperiores placeat distinctio fuga, natus similique debitis. Eaque,
            eos quos? Sint ullam ipsum voluptas nobis recusandae accusantium
            nulla hic laborum aspernatur. Obcaecati fugiat expedita sint,
            excepturi quasi reiciendis. Quam optio dolor est? Provident, fuga
            iusto! Ab aut perferendis dolorum soluta reprehenderit optio iure a
            reiciendis vero laudantium, doloribus odio, eum at. Itaque
            aspernatur vitae mollitia dignissimos, maxime adipisci tenetur totam
            explicabo velit quasi voluptates officia consectetur ipsum, saepe
            vel molestias sapiente, voluptatibus sequi minima veritatis!
            Blanditiis a explicabo unde quod ullam. Assumenda quam amet
            molestias, maxime non aliquam beatae vel vitae! Voluptate
            perferendis quas, expedita autem atque et minus eveniet, recusandae
            mollitia reiciendis sint explicabo, asperiores sequi repellendus
            ipsam voluptatibus distinctio. Id aut blanditiis voluptatibus porro,
            iure, sunt nobis, illum animi mollitia recusandae perferendis
            assumenda ipsam. Neque voluptas eos accusamus blanditiis tempora
            maxime magnam magni nobis ratione officiis. Est, provident
            necessitatibus? Sunt tempore magni non iste aperiam voluptatem
            eveniet quibusdam, accusamus tempora voluptatibus, esse ut! Harum
            molestiae quos repudiandae voluptatem! Mollitia excepturi temporibus
            nesciunt possimus exercitationem? Delectus, eveniet minima?
            Voluptas, minus. Perspiciatis, exercitationem. Consequuntur voluptas
            nulla molestiae fugiat at eum minima ut dolore sint, saepe nisi
            veritatis odio eaque, et sapiente maiores? Dicta delectus vero
            aliquam animi voluptatum illo similique quae? Minima explicabo
            tempore sit saepe facere quidem facilis numquam, itaque sapiente
            officia, nesciunt, incidunt doloribus corporis esse mollitia
            doloremque. Quis excepturi fugit praesentium laborum distinctio,
            labore quasi molestiae ab reiciendis. Ducimus eaque voluptates
            delectus vel unde non illum rem, doloremque fugiat recusandae quasi
            dolor nulla ipsam deserunt architecto consectetur quae eum
            inventore. Dicta expedita aperiam debitis commodi laboriosam libero
            odit. Atque, similique pariatur necessitatibus maxime itaque earum
            placeat libero assumenda? Veritatis nulla fugit dolore neque
            voluptates totam ipsa dignissimos nobis magnam nam aperiam ea
            possimus in ab, dolores officia impedit. Asperiores numquam quas
            saepe possimus incidunt nihil, mollitia ipsum nesciunt modi corrupti
            repellendus ea debitis exercitationem dolor maxime autem vitae
            veniam labore, amet perferendis voluptatibus! Eos quas earum odio?
            Sequi? Similique atque temporibus sed at omnis dicta praesentium
            aspernatur consectetur, tenetur vel voluptatum nulla totam eius,
            tempore inventore mollitia perferendis, facere et dolores. Ut,
            accusantium dignissimos dolorum illo delectus itaque. Facilis
            necessitatibus veniam, molestiae expedita eos, quam voluptates animi
            perspiciatis eaque in natus atque inventore. Deleniti assumenda
            nostrum doloribus earum laborum autem id. Fugit quidem reiciendis
            ipsum id, voluptate ex. Distinctio voluptate cupiditate repellat
            perferendis quas deserunt placeat accusamus sit odit, explicabo
            doloremque similique possimus ut. Labore accusantium, quas pariatur
            totam, incidunt, possimus minus distinctio facilis fugiat ipsam
            fugit nemo. Placeat quibusdam culpa repudiandae ea molestiae maiores
            non debitis delectus exercitationem, ad officiis blanditiis
            excepturi aut a cum corrupti dolorum quisquam magnam! Nobis, animi
            nostrum illo vero natus itaque vel. Iste, officiis enim? Sit odit
            saepe voluptas possimus quasi eveniet culpa fugit alias eaque nisi
            quae nam vel inventore quo cum soluta nesciunt quia, dolor
            voluptatum iusto accusamus ea corrupti! Porro, odit! Error aperiam
            fugit aliquam eum quod, inventore commodi eius tempore voluptates
            pariatur numquam facilis alias excepturi accusantium ex maiores
            repudiandae laboriosam veniam sed a qui expedita quibusdam
            praesentium. Officia harum ab nobis quibusdam ratione quo. A nisi
            quaerat doloribus sunt aliquid veritatis necessitatibus fuga
            ducimus, repellendus rerum. Perspiciatis temporibus consectetur
            dolorem at ullam sequi distinctio nulla. Fugit, id. Odit, dolorum
            adipisci quam at qui iure eligendi facere unde ipsum cum et quas?
            Eligendi eaque expedita molestias labore totam quos doloribus nisi.
            Quidem maxime ullam dolores, aut reprehenderit alias. Voluptatum
            accusantium amet, nam, quae a esse recusandae eaque aspernatur
            debitis qui voluptate quo tempore tempora consequatur sint
            repudiandae numquam quod at fugit, similique praesentium saepe
            delectus ad ab. Totam. Cupiditate reiciendis labore non odit,
            voluptatibus voluptatem dolor doloribus nobis corporis itaque iure
            asperiores optio aliquam ipsa repudiandae ab vel nihil ratione
            pariatur eligendi unde. Et excepturi praesentium ad iste. Eum
            pariatur doloribus odit nulla! Repellat eius omnis odit autem quo
            dolores animi ipsam asperiores assumenda. Tenetur possimus
            recusandae ducimus explicabo dolore. Hic ipsam cupiditate facere
            quod aperiam officia placeat?
          </p>
        </div>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Tapp;
