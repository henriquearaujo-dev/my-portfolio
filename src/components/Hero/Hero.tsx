import styles from './Hero.module.css';

import img from '../../assets/thumb.webp';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img src={img} className={styles.thumb} />
        <div className={styles.info}>
          <h1>Henrique Araújo</h1>
          <p>Desenvolvedor Full Stack | Node.js | React | TypeScript</p>
          <p>Graduando em Engenharia de Software</p>

          <div className={styles.social}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/henriquearaujodev/"
            >
              <img src={linkedin} />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/henriquearaujo.dev"
            >
              <img src={instagram} className={styles.plus} />
            </a>

            <a target="_blank" href="https://github.com/henriquearaujo-dev">
              <img src={github} />
            </a>
          </div>

          <div className={styles.site}>
            <span>Website em desenvolvimento</span>
          </div>
        </div>
      </div>
    </div>
  );
}
