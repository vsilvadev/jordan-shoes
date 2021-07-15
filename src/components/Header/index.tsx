import styles from "./styles.module.scss";

export function Header() {
    return(
        <header id={styles.container}>
            <div className={styles.discount}>
                <h2>Ganhe R$10,00 de desconto no frete</h2>
            </div>
            <div className={styles.storeTitle}>
                <h1>Jordan Shoes</h1>
            </div>
        </header>
    );
}