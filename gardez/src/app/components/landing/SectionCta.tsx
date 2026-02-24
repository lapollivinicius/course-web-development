import Image from "next/image"
import styles from "@/app/components/styles/SectionCta.module.scss"

export default function SectionCta() {
    return (
        <section className={styles.sectionCta}>

            <div className={styles.textCta}>
                <h2>Venda ou Alugue seu imóvel</h2>
                <p>Rapido, Simples e Fácil</p>
                <button className="btn-default">Comece já!</button>
            </div>

            <div className={styles.imageCta}>
                <Image 
                    className="object-cover"
                    src="/png/woman.png"
                    alt="woman"
                    fill
                />
            </div>

        </section>
    )
}