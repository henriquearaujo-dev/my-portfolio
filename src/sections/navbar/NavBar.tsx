import { useState } from 'react';
import { DownloadIcon, Menu, X } from 'lucide-react';
import styles from './NavBar.module.css';
import img from '@/assets/logo.webp';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="section-wrapper">
      <div className="container flex radius">
        <nav className={styles.main_nav}>
          <a href="#" className={styles.nav_logo_link}>
            <div className={styles.nav_logo}>
              <img src={img} alt="Logo" />
            </div>
          </a>

          <button
            className={styles.menu_toggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`${styles.nav_menu} ${isMenuOpen ? styles.menu_open : ''}`}
          >
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Laboratório</a>
              </li>
              <li>
                <a href="#">Tecnologias</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>

          {/* Botão de CTA */}
          <a href="#" className={styles.cta_link}>
            <div className={styles.nav_cta}>
              <span>Download CV</span>
              <DownloadIcon />
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}
