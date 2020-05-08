import { getCharacters } from '../api/actions/getCharacters';
import styles from '../css/Index.module.css'
import { CharacterItem } from '../components/Character'

export default class Index extends React.Component {
  state = {
    characters: [],
    currPage: 1,
  }
  componentDidMount() {
    getCharacters().then((res) => {
      this.setState({characters: [...res.data.results]});
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currPage != this.state.currPage) {
      getCharacters(this.state.currPage).then((res) => {
        this.setState({characters: [...this.state.characters, ...res.data.results]});
      });
    }
  }

  changeCurrentPage = () => {
    const currPage = this.state.currPage + 1;
    this.setState({currPage});
  }

  render(){
    return (
      <div>
        {this.state.characters.map((item) => <CharacterItem key={item.id} character={item}/>)}
        {this.state.currPage != 25 && <div className={styles.buttonContainer}><button className={styles.loadMoreButton} onClick={this.changeCurrentPage}>Load More</button></div>}
      </div>
    )
  }
}