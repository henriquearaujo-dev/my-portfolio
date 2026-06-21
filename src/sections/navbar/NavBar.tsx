import { DownloadIcon } from 'lucide-react';
import styles from './NavBar.module.css';

import img from '@/assets/logo.webp';

export function NavBar() {
  return (
    <div className="section-wrapper">
      <div className="container flex radius">
        <nav className={styles.main_nav}>
          <a href="#">
            <div className={styles.nav_logo}>
              <span>
                <img src={img} alt="Logo" />
              </span>
            </div>
          </a>

          <div className={styles.nav_menu}>
            <ul>
              <a href="#">
                <li>Início</li>
              </a>
              <a href="#">
                <li>Laboratório</li>
              </a>
              <a href="#">
                <li>Tecnologias</li>
              </a>
              <a href="#">
                <li>Sobre</li>
              </a>
              <a href="#">
                <li>Contato</li>
              </a>
            </ul>
          </div>

          <a href="#">
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
