import styles from "./styles.module.scss";
import shoe1 from "../../assets/1.png";
import shoe2 from "../../assets/2.png";
import shoe3 from "../../assets/3.png";
import shoe4 from "../../assets/4.png";
import shoe5 from "../../assets/5.png";
import shoe6 from "../../assets/6.png";
import shoe7 from "../../assets/7.png";
import shoe8 from "../../assets/8.png";

export function MainPage() {
    return(
        <main id={styles.container}>
            <section className={styles.banner}>
                <div className={styles.bannerImg}/>
                <div className={styles.bannerContent}>
                    <h2>A melhor loja de Jordan</h2>
                    <p>O tênis Jordan é fruto de uma velha e forte parceria entre Nike e o jogador Michael Jordan</p>
                </div>
            </section>

            <section className={styles.highlights}>
                <h1>Destaques</h1>
                <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
            </section>

            <section className={styles.shoesContainer}>
                <div className={styles.shoesBox}>
                    <img src={shoe1} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe2} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe3} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe4} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe5} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe6} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe7} alt="Shoe 1" />
                </div>
                <div className={styles.shoesBox}>
                    <img src={shoe8} alt="Shoe 1" />
                </div>
            </section>
        
        </main>
    );
}