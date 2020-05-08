import { render } from "react-dom";
import Link from 'next/link'
import styles from "../css/Character.module.css";

export const CharacterItem = (props) => {
  return (
    <Link href={`/CharacterInfo?id=${props.character.id}&name=${props.character.name.replace(' ', '_')}`}>
      <div id="cards" className={styles.card}>
        <img
          src={props.character.image}
          alt={props.character.name}
          className={styles.image}
        />
        <div className={styles.caption}>
          <p className={styles.text}>{props.character.name}</p>
          <p className={styles.text}>Status: {props.character.status}</p>
        </div>
      </div>
    </Link>
  );
};
