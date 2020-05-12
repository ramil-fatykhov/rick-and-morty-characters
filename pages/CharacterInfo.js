import { getCharacter } from "../api/actions/getCharacter";
import { render } from "react-dom";
import styles from "../css/CharacterInfo.module.css";
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
    getCharacter(this.parseURL()).then((res) => {
      const character = res.data;
      console.log('111111111111111', character);
      const idArr = [];
      character.episode.forEach(element => {
        idArr.push(element.substring(element.lastIndexOf('/') + 1))
      });
      getEpisodes(idArr).then((res) => {
        this.setState({ character, episodes: res });
      });
    });
  }

  render() {
    const { character, episodes } = this.state;
    console.log(episodes);
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.image}
          />
          <div className={styles.infoContainer}>
            <p>{character.name}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin && character.origin.name}</p>
            <p>Location: {character.location && character.location.name}</p>
          </div>
        </div>

        <div className={styles.episodes}>
          {episodes && episodes.map((item) => <Episodeitem key={item.id} episode={item}/>)}
        </div>
      </div>
    );
  }
}
