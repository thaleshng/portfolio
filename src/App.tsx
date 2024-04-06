import { createGlobalStyle } from "styled-components"
import { Header } from "./components/header"
import "./variables.css"
import { Home } from "./components/home"
import { AboutMe } from "./components/about-me"
import { Abilities } from "./components/abilities"
import { Projects } from "./components/projetcs"
import { Footer } from "./components/footer"

function App() {

  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Home />
        <AboutMe />
        <Abilities />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  a{  
      text-decoration: none;
      color: var(--cor-branca);
  }

  ul{
      list-style: none;
  }

  img{
      max-width: 100%;
  }

  html {
    font-size: 62.5%;
    color: var(--white-color);
    font-weight: 300;
    scroll-behavior: smooth;
  }

  body {
      background: linear-gradient(to right, var(--bg-darkblue-color) 10%, var(--bg-dark-color));
      font-family: var(--primary-font);
      font-size: var(--normal-font);
  }

  .container {
    max-width: 1140px;
    margin: auto;
  }

  .row {
      display: flex;
      flex-wrap: wrap;
  }

  .justify-content-between {
      justify-content: space-between;
  }

  .align-items-center {
      align-items: center;
  }

  .social-media a {
      display: inline-block;
      width: 40px;
      height: 40px;
      font-size: 2.5rem;
      text-align: center;
      margin: 0 6px;
      border: 1px solid var(--primary-color);
      background-color: var(--primary-color);
      border-radius: 8px;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
  }

  .social-media a:hover {
      background-color: transparent;
      color: var(--primary-color);
      box-shadow: var(--primary-color) 0px 5px 15px;
  }

  .box-shadow {
      box-shadow: var(--primary-color) 0px 5px 15px;
  }

  .section {
      padding: 7rem 0 7rem;
  }

  .section-title {
      text-align: center;
      flex: 0 0 100%;
      max-width: 100%;
      padding: 60px 0;
  } 

  .section-title h2 {
      font-size: var(--giant-font);
      font-weight: 500;
      text-transform: uppercase;
  }

  .btn {
      font-size: var(--big-font);
      padding: 10px 20px;
      border-radius: 20px;
      background: linear-gradient(to right, var(--gradient-color),var(--primary-color));
      display: inline-block;
      z-index: 9;
      position: relative;
  }

  .btn-transition {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(to right, var(--bg-darkblue-color), var(--bg-darkblue-color) 5%);
    -webkit-transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
    transition: opacity 0.3s linear;
    border-radius: 20px;
  }

  .btn:hover .btn-transition {
      opacity: 1;
  }
`
