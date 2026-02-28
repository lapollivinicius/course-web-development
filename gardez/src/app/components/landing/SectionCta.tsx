"use client";

import Image from "next/image";
import styles from "@/app/components/styles/SectionCta.module.css";
import { motion } from "motion/react";

export default function SectionCta() {

  return (
    <section className={styles.sectionCta}>
			
      <motion.div  
        className={styles.textCta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <h2>Venda ou Alugue seu imóvel</h2>
        <p>Rapido, Simples e Fácil</p>
        <button className="btn-default">Comece já!</button>
      </motion.div>

      <motion.div 
        className={styles.imageCta}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        >
        <Image className="object-cover" src="/png/woman.png" alt="woman" fill loading="eager"/>
      </motion.div>
    </section>
  );
}
