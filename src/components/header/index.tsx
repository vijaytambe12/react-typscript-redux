import * as React from 'react';
import './Header.css';
import {RouteComponentProps, withRouter} from "react-router";


interface IState {
    searchText:string
}



class Header extends React.Component<RouteComponentProps,IState> {

    constructor(props:any) {
        super(props);
        this.state = {
            searchText:""
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    public render() {
        return (
            <div className="header shadow">
                <div className="header-banner"/>
                <div className="header-content">
                    <div className="logo-div">
                        <a href={"/"}> <img src={'/images/logo.png'} className='logo-image'/></a>
                    </div>
                    <div className="searchFormDiv">
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                placeholder="What are you looking to rent?"
                                value={this.state.searchText}
                                onChange={this.handleSearchTextChange}/>
                        </form>
                    </div>
                    <div className='header-right'>
                        <ul className='menu-items'>
                            <li>
                                Log In
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    private handleSearchTextChange(event:any) {
        this.setState({searchText:event.target.value});
    }

    private onSubmit() {
        this.props.history.push("/search/"+ this.state.searchText);
    }
}

export default withRouter(Header);
