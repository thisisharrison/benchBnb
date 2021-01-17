import React from 'react';

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            seating: '',
            lat: this.props.lat,
            lng: this.props.lng,
            photoFile: null, 
            photoUrl: null
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(prop){
        return (e) => this.setState({ [prop]: e.target.value });
    } 
    handleFile(e) {
        const file = e.target.files[0]
        const fileReader = new FileReader ();
        fileReader.onloadend = () => this.setState({ photoFile: file, photoUrl: fileReader.result });
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData ();
        formData.append('bench[description]', this.state.description)
        formData.append('bench[seating]', this.state.seating)
        formData.append('bench[lat]', this.state.lat)
        formData.append('bench[lng]', this.state.lng)
        formData.append('bench[photo]', this.state.photoFile)
        this.props.createBench(formData);
        this.props.history.push('/');
    }
    render() {
        const preview = this.state.photoUrl ? (
            <div>
                <h3>Preview</h3>
                <img src={this.state.photoUrl} alt=""/>
            </div>
        ) : null
        return (
            <div>
                <h1>Add Bench</h1>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Description: 
                    <input type="text"
                        value={this.state.description}
                        onChange={this.handleInput('description')}/>
                </label>
                <label>
                    Seats:
                    <input type="text"
                        value={this.state.seats} 
                        onChange={this.handleInput('seating')}/>
                </label>
                <label>
                    Lat:
                    <input type="text"
                        disabled
                        value={this.state.lat} />
                </label>
                <label>
                    Lng:
                    <input type="text"
                        disabled
                        value={this.state.lng} />
                </label>
                <label>
                    Photo:
                    <input type="file"
                        onChange={this.handleFile}/>
                </label>
                {preview}
                <input type="submit"
                    value="Submit"/>
                </form>
            </div>
        )
    }
}

export default BenchForm;