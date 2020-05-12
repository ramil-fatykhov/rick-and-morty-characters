import { render } from "react-dom";
import Link from 'next/link'
import styles from "../css/Episode.module.css";
import { getEpisode } from "../api/actions/getEpisodes";

export const Episodeitem = (props) => {
  return (
    <Link href={`/EpisodeItem?id=${props.episode.id}}`}>
      <div id="cards" className={styles.card}>
        <div className={styles.caption}>
          <p className={styles.text}>{props.episode.name}</p>
        </div>
      </div>
    </Link>
  );
};
