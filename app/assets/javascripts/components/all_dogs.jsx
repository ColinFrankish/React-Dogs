class AllDogs extends React.Component {
    constructor(props) {
    super(props);
    this.state =  { 
                  };
  }

  render() {

    let styles = {
      allDogs: {
        width: "25%", 
        textAlign: "center"
      }
    }
    console.log('spliced dogs:',this.props.allDogs.splice(0,3))
    let dogs = this.props.allDogs.map((dog) => {
      return (
        <div  key={dog.id}
              style={styles.allDogs}>
          <h3>Name: {dog.name}</h3>
          <p>Wag Rate: {dog.tail_wag_rate}</p>
          <button onClick={this.props.handleDeleteDog.bind(this, dog.id, dog.name)}>Destroy {dog.name} !</button>
        </div>
      )
    });
    console.log(this.props)
    return(
      <div>
          <h2>All Dogs. Yes. All The Dogs</h2>
          {dogs}
      </div>
    )
  }
};

