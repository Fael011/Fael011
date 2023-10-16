import styles from "./Header.module.css"
import { useState } from "react"
import logo_smarmita from "../images/logo_smarmita.png"
import { List, X } from "@phosphor-icons/react"

import React from 'react'
import { Link } from "react-router-dom"


function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false);

  function handleAbrirFecharMenu() {
    if (abrirMenu === true) {
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)

  }

  return (

    <header className={styles.header}>
      <div className={styles.mobile}>

        <div className={styles.menu_logo}>
          <button onClick={handleAbrirFecharMenu}>{
            abrirMenu == true ? (
              <X size={32} />
            ) : (
              <List size={32} />
            )
          }
          </button>

          <Link to={"/"}><img src={logo_smarmita}/></Link>
        </div>

        <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
          <nav>
            <Link to={"/Conteudo"}>História</Link>
            <Link to={"/Componentes"}>Componentes</Link>
            <Link to={"/Integrantes"}>Sobre nós</Link>
          </nav>

        </div>
      </div>

      <div className={styles.desktop}>
        <div>
          <Link to={"/"}><img src={logo_smarmita}/></Link>
        </div>

        <div>
          <nav className={styles.desktop_options}>
            <li><Link to={"/Conteudo "}>História</Link></li>
            <li><Link to={"/Componentes"}>Componentes</Link></li>
            <li><Link to={"/Integrantes"}>Sobre nós</Link></li>
          </nav>


        </div>
      </div>
      

    </header>
  )
}


export default Header