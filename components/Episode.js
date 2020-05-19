import { render } from "react-dom";
import Link from "next/link";
import styles from "../css/Episode.module.css";
import { getEpisode } from "../api/actions/getEpisodes";

export const Episodeitem = (props) => {
  return (
    <div id="cards" className={`${styles.card} ${styles.tooltip}`}>
      <div className={styles.caption}>
        <p className={styles.text}>{props.episode.name}</p>
        <p className={`${styles.text} ${styles.tooltiptext}`}>
          Seasson: {props.episode.episode}
        </p>
      </div>
    </div>
  );
};
