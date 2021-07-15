import styles from "./styles.module.scss";

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
        </main>
    );
}