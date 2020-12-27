import { render } from "react-dom";
import Link from "next/link";
import styles from "../css/episode.module.css";
import { getEpisode } from "../api/actions/getEpisodes";

export const Episodeitem = (props) => {
  return (
    <div id="cards" className={`${styles.episode__card} ${styles.episode__tooltip}`}>
      <div className={styles.episode__caption}>
        <p className={styles.episode__text}>{props.episode.name}</p>
        <p className={`${styles.episode__text} ${styles.episode__tooltiptext}`}>
          Seasson: {props.episode.episode}
        </p>
      </div>
    </div>
  );
};
