class NewDog extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { name: '',
                    tailWagRate: 0
                  };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTailWagRateChange = this.handleTailWagRateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleTailWagRateChange(event) {
    this.setState({tailWagRate: event.target.value})
  }


  handleSubmit(event) {
    var name    = this.state.name
    var tailWagRate = this.state.tailWagRate
    $.ajax({
        url: '/api/v1/dogs',
        type: 'POST',
        data: { dog: { name: name, tail_wag_rate: tailWagRate } },
        success: (response) => {
            alert('We saved the dog! See the hound in your list')
        }
    });

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Dog</h1>
          <input  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  placeholder='Enter the name of the canine' /><br/>
          <input  type="number"
                  value={this.state.tailWagRate}
                  onChange={this.handleTailWagRateChange}
                  placeholder='Enter a wag rate between 1-100' /><br/>
          <input  type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

