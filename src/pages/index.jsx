import { render } from '@czechitas/render';
import '../global.css';
import './index.css';


const Footer = () => {
    return (
        <footer>
            <p>Footer Copyright</p>
        </footer>
    )
    }


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace - updated</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <Footer />
  </div>
);
