import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

class Addition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            result: 0
        }
    }


    calculate = () => {
        this.setState({
            result: parseInt(this.state.number1) + parseInt(this.state.number2)
        })
    }

    render() {
        return (
            <>                <br></br><br></br>
          
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <Card body>
                        <center>
                            <div class="col-md-5 col-md-offset-5">
                            <h1>ADDITION</h1><hr></hr><h5>Ajouter Deux Nombres</h5><br/>
                                <form id="create-user-form">
                                    <div className="number-inputs">
                                        <div  class="form-group">
                                            <input type='number' placeholder="Premier Nombre" class="form-control" onChange={(e) => this.setState({ number1: e.target.value })} />
                                        </div>
                                        
                                        <center><h2>-</h2></center>
                                        
                                        <div  class="form-group">
                                            <input type='number' placeholder="Second Nombre" class="form-control" onChange={(e) => this.setState({ number2: e.target.value })} />
                                        </div>
                                        <br />
                                        <input type="button" value="= CALCULER =" class="btn btn-success" onClick={this.calculate} />
                                        <br />
                                    </div>
                                </form><br />

                                <h6>Le Résultat De Votre Addition Est :</h6>
                                <h1>{this.state.result}</h1>
                            </div>
                        </center>
                    </Card>
                </div>
                <div class="col-md-2"></div>
            </div>
            </>

        );
    }
}
export default Addition;
