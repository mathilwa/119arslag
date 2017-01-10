import React from 'react';

const Pamelding = React.createClass({
  getInitialState () {
    return {
      navn: '',
      epost: '',
    }
  },
  oppdaterNavn (event) {
    this.setState({navn: event.target.value})
  },
  oppdaterEpost (event) {
    this.setState({epost: event.target.value})
  },
  meldPa (event) {
    event.preventDefault();

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch('https://torunnogtrond.firebaseio.com/pameldte.json', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({ navn: this.state.navn, epost: this.state.epost }),
    });
  },
  render () {
    return (
      <div className="pure-g information">
        <form onSubmit={this.meldPa}>
          <input type="text" placeholder="Navn" value={this.state.navn} onChange={this.oppdaterNavn}/>
          <input type="text" placeholder="Epostadresse" value={this.state.epost} onChange={this.oppdaterEpost}/>
          <input type="submit" value="Bli med!" onClick={this.meldPa}/>
        </form>
      </div>
    );
  }
});

export default Pamelding;