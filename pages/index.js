import { getCharacters } from '../api/actions/getCharacters';
import { filterCharacter } from '../api/actions/filterCharacter';
import styles from '../css/index.module.css'
import { CharacterItem } from '../components/Character'

export default class Index extends React.Component {
  state = {
    characters: [],
    currPage: 1,
    url: '?page=1',
    filter: '',
  }
  componentDidMount() {
    console.log(location);
    getCharacters(this.state.url).then((res) => {
      this.setState({characters: [...res.data.results]});
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url != this.state.url || prevState.filter != this.state.filter) {
      const finalUrl = this.state.filter.length ? `${this.state.url}&${this.state.filter}` : this.state.url;
      getCharacters(finalUrl).then((res) => {
        if (prevState.filter != this.state.filter) {
          this.setState({characters: [...res.data.results]});
        } else {
          this.setState({characters: [...this.state.characters, ...res.data.results]});
        }
      });
    }
  }

  changeCurrentPage = () => {
    const currPage = this.state.currPage + 1;
    const url = `?page=${currPage}`;
    this.setState({currPage, url});
  }

  filter = (e) => {
    e.preventDefault();
    let status = '';
    let filter = '';
    const name = document.getElementById("name").value;
    const filterAlive = document.getElementById("filterAlive").checked;
    const filterDead = document.getElementById("filterDead").checked;
    const filterUnknown = document.getElementById("filterUnknown").checked;
    if (filterAlive) {
      status = 'alive';
    }
    if (filterDead) {
      status = 'dead';
    }
    if (filterUnknown) {
      status = 'unknown';
    }
    filter += name.length ? `name=${name}` : '';
    filter += name.length && status.length ? '&' : '';
    filter += status.length ? `status=${status}` : '';
    if (!filter.length) return;
    this.setState({ filter, currPage: 1, url: '?page=1'});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.filter}>
          <p>Please select your preferred contact method:</p>
          <div>
            <input name="name" id="name"/>
            <input type="radio" id="filterAlive"
              name="status" value="alive"/>
            <label for="filterAlive">Alive</label>

            <input type="radio" id="filterDead"
              name="status" value="dead"/>
            <label for="filterDead">Dead</label>

            <input type="radio" id="filterUnknown"
              name="status" value="unknown"/>
            <label for="filterUnknown">Unkown</label>
          </div>
          <div>
            <button type="submit" value="Submit">Submit</button>
          </div>
        </form>
        {this.state.characters.map((item) => <CharacterItem key={item.id} character={item}/>)}
        {this.state.currPage != 25 && <div className={styles.load_more_button__container}><button className={styles.load_more_button} onClick={this.changeCurrentPage}>Load More</button></div>}
      </div>
    )
  }
}