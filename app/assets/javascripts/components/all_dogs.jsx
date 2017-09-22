var AllDogs = React.createClass({
  getInitialState() {
          return { dogs: [] }
  },

  componentDidMount() {
      $.getJSON('/api/v1/dogs.json', (response) => { this.setState({ dogs: response }) });
  },

  render() {

    var dogs = this.state.dogs.map((dog) => {
        return (
            <div key={dog.id}>
                <h3>Name: {dog.name}</h3>
                <p>Wag Rate: {dog.tail_wag_rate}</p>
            </div>
        )
    });

    return(
        <div>
            <h2>All Dogs. Yes. All The Dogs</h2>
            {dogs}
        </div>
    )
  }

});