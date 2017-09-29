class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }; 
  }

  componentDidMount() {
    $.getJSON('/api/v1/dogs.json', (response) => { this.setState({ dogs: response }) });
  }

  // getDogsList() {
  //   $.getJSON('/api/v1/dogs.json', (response) => { this.setState({ dogs: response }) });
  // };

  handleDeleteDog(dog_id, name) {
    console.log("Dog ID", dog_id)
    let deletedDogID = dog_id
    $.ajax({
      url: `api/v1/dogs/${dog_id}`,
      type: 'DELETE',
      success (response) {
        alert(`${name} has been destroyed!!` )
        // this.getDogsList()
      }
    })
  }
  render() {
    
    return (
      <div>
        <NewDog />
        <AllDogs  handleDeleteDog={this.handleDeleteDog}
                  allDogs={this.state.dogs}/>
      </div>
    )
  }
};

