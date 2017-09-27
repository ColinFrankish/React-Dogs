var NewDog= React.createClass({
    render() {
        return (
            <div>
                <h1>New Dog</h1>
                <input ref='name' placeholder='Enter the name of the canine' /><br/>
                <input ref='wagRate' placeholder='Enter a wag rate between 1-100' /><br/>
                <button>Submit</button>
            </div>
        )
    }
});