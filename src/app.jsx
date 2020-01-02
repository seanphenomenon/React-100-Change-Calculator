import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: '',
      received: '',
      totalChange: '',

    }

    this.handleDueChange = this.handleDueChange.bind(this)
    this.handleReceivedChange = this.handleReceivedChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }


  handleDueChange(event) {
    this.setState({
      due: event.target.value
    });

  }


  handleReceivedChange(event) {
    this.setState({
      received: event.target.value
    });

  }

  handleOnClick(event) {

    let amountDue = this.state.due;
    let amountReceived = this.state.received;
    let changeDue = (amountReceived - amountDue).toFixed(2);
    console.log(changeDue)

    // Targeting dollars only
    let dollars = Math.floor(changeDue)
    console.log(dollars)

    // Seperating change from dollars
    let change = (changeDue % 1).toFixed(2)
    console.log(change)



    this.setState({

      totalChange: changeDue,

      // Targeting Twenties only

      twenties: Math.floor(changeDue / 20),
      // console.log(twenties)

      // Targeting Tens only

      tens: Math.floor(changeDue % 20 / 10),
      // console.log(tens)

      // Targeting Fives only

      fives: Math.floor(changeDue % 10 / 5),
      // console.log(fives)

      // Targeting Ones only

      ones: Math.floor(changeDue % 5 / 1),
      // console.log(ones)

      // Targets quarters only

      quarters: Math.floor(change / .25),
      // console.log(quarters)

      // Targeting dimes only

      dimes: Math.floor(change % .25 / .10),
      // console.log(dimes)

      // Targeting nickels only

      nickels: Math.floor(change % .10 / 5),
      // console.log(nickels)

      // Targeting pennies only

      pennies: Math.round(change % .05 / 0.01),
      // console.log(pennies)


    });

    event.preventDefault();

  }



  render() {

    return (

      <div className='container-fluid'>
        <h1>Change Calculator</h1>
        <div className='page-header'></div>

        <div className='row'>
          <div className='col-sm-4'>
            <div className="panel panel-default">
              <div className="panel-heading panel-title"> Enter Information
              </div>
              <div className="panel-body"> How much is due?
               <input name='amountDue' className='form-control' type='number' step='0.01' placeholder="$0.00" value={this.state.due} onChange={this.handleDueChange} />
              </div>
              <div className='panel-body'> How much is received?
                  <input name='amountReceived' className='form-control' type='number' step='0.01' placeholder="$0.00" value={this.state.received} onChange={this.handleReceivedChange} />
              </div>
              <div className="panel-footer">
                <button className='btn btn-primary btn-block' onClick={this.handleOnClick}> Calculate </button>
              </div>
            </div>
          </div>


          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className="alert alert-success text-center" role="alert" value={this.state.totalChange}><strong> Great! </strong> Total change due: ${this.state.totalChange}!</div>
                {/* <div className="alert alert-danger text-center" role="alert"><strong> Danger! </strong> Additional money owed. </div> */}

                <div className='row'>
                  <div className="col-sm-3 well well-sm  text-center"><strong> Twenties </strong>
                    <p className='change'>{this.state.twenties}</p>
                  </div>
                </div>
                <div className="col-sm-3 well well-sm text-center"><strong> Tens </strong>
                  <p className='change'>{this.state.tens}</p>
                </div>
                <div>
                  <div className="col-sm-3 well well-sm text-center"><strong> Fives </strong>
                    <p className='change'>{this.state.fives}</p>
                  </div>
                </div>
                <div className="col-sm-3 well well-sm text-center"><strong> Ones </strong>
                  <p className='change'>{this.state.ones}</p>
                </div>
              </div>

              <div className='row'>
                <div className="col-sm-2 well well-sm text-center"><strong> Quarters </strong>
                  <p className='change'>{this.state.quarters}</p>
                </div>
              </div>
              <div className="col-sm-2 well well-sm text-center"><strong> Dimes </strong>
                <p className='change'>{this.state.dimes}</p>
              </div>
              <div className='col-sm-2 well well-sm text-center'><strong> Nickels </strong>
                <p className='change'>{this.state.nickels}</p>
              </div>
              <div className='col-sm-2 well well-sm text-center'><strong> Pennies </strong>
                <p className='change'>{this.state.pennies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>













    );

  }
}



export default App;
