import React, { Component } from 'react';
import axios from 'axios';
import Nav from './children/Nav'
import Modal from './modal/modal.js';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { Input, TextArea, FormBtn } from "../components/children/FormForm";

require('./Search.css');


export default class MailingList extends Component {

    constructor(props) {
		super(props);
		this.state = {
			EmailAddress: "",
            Name: "",
            Message: "",
			results: [],
            show: false
		};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
	}

    addtoMailchimp = (maillistInfo) => {
        console.log("hello");
        axios.post("/apis/mailinglist/newinvestor", {
            maillistInfo
        }).then(data => {
            console.log("API send successful", data.data);
            this.showModal();
        }).catch(err => {
            console.log(err);
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const maillistInfo = {
            EmailAddress: this.state.EmailAddress,
            Name: this.state.Name,
            Message: this.state.Message
        }
    
        this.addtoMailchimp(maillistInfo);
    }

    handleInputChange = event => {
        event.preventDefault();

        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        
    return (
        <div>
            <Nav/>  
            <section id="contactme">
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Paper>
                                <form>
                                    <div className="form-group mailinghead">
                                        <h3>E-mail Me</h3>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.EmailAddress}
                                            type="e-mail"
                                            name="EmailAddress"
                                            className="form-control"
                                            placeholder="E-Mail"
                                            id="email">
                                        </input>
                                        <br></br>
                                        <input
                                            onChange={this.handleInputChange}
                                            value={this.state.Name}
                                            type="text"
                                            name="Name"
                                            className="form-control"
                                            placeholder="Name"
                                            id="Name">
                                        </input>
                                        <br></br>
                                        <textarea
                                            onChange={this.handleInputChange}
                                            value={this.state.Message}
                                            type="text"
                                            name="Message"
                                            rows="20"
                                            className="form-control"
                                            placeholder="Message"
                                            id="Message">
                                        </textarea>
                                        <br></br>
                                        <button 
                                        //  disabled={!(formObject.email && formObject.Name && formObject.Message)}
                                        type="submit" 
                                        onClick={this.handleSubmit} 
                                        className="btn btn-success">
                                            Send E-mail
                                        </button>
                                        
                                    </div>
                                </form>
                            </Paper>
                        </Grid>
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <p>Thank You {this.state.Name} {this.state.Message}! I'll reach you back Shortly!</p>
                        </Modal>
                    </Grid>
                </div>
            </section>
        </div>
    );
  }
}