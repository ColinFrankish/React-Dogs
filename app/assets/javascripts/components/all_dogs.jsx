class AllDogs extends React.Component {
    constructor(props) {
    super(props);
    this.state =  { dogs: [],
                  };
  }

  componentDidMount() {
    $.getJSON('/api/v1/dogs.json', (response) => { this.setState({ dogs: response }) });
  }

  handleDeleteDog(dog_id, name) {
    console.log("Dog ID", dog_id)
    let deletedDogID = dog_id
    $.ajax({
      url: `api/v1/dogs/${dog_id}`,
      type: 'DELETE',
      success (response) {
        alert(`${name} has been destroyed!!` )
      }
    })
  }


  render() {
    console.log(this.state)
    let dogs = this.state.dogs.map((dog) => {
      return (
        <div key={dog.id}>
          <h3>Name: {dog.name}</h3>
          <p>Wag Rate: {dog.tail_wag_rate}</p>
          <button onClick={this.handleDeleteDog.bind(this, dog.id, dog.name)}>Destroy {dog.name} !</button>
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
};

