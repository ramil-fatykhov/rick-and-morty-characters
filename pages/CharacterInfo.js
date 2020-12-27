import { getCharacter } from "../api/actions/getCharacter";
import { render } from "react-dom";
import styles from "../css/character_info.module.css";
import { Episodeitem } from "../components/Episode";
import { getEpisodes } from "../api/actions/getEpisodes";

export default class CharacterInfo extends React.Component {
  state = {
    character: [],
    episodes: [],
  };

  parseURL = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    return id;
  };

  componentDidMount() {
    const { episodes } = this.state;
    getCharacter(this.parseURL()).then((res) => {
      const character = res.data;
      const idArr = [];
      character.episode.forEach(element => {
        idArr.push(element.substring(element.lastIndexOf('/') + 1))
      });
      getEpisodes(idArr).then((res) => {
        this.setState({ character, episodes: Array.isArray(res) ? res : [res] });
      });
    });
  }

  render() {
    const { character, episodes } = this.state;
    return (
      <div className={styles.character_info__main_container}>
        <div className={styles.character_info__container}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.character_info__image}
          />
          <div className={styles.character_info__info_container}>
            <p>{character.name}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin && character.origin.name}</p>
            <p>Location: {character.location && character.location.name}</p>
          </div>
        </div>

        <div className={styles.character_info__episodes}>
          <p className={styles.character_info__episode_title}>Episodes</p>
          {episodes && episodes.map((item) => <Episodeitem key={item.id} episode={item}/>)}
        </div>
      </div>
    );
  }
}
