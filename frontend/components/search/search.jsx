import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            songResults: [],
            userResults: [],
            itemSelected: {},
            showItemSelected: false
        }


        this.getAutocompletedResults = this.getAutocompletedResults.bind(this)
    }

    update() {
        return (e) => {
            this.setState({ searchTerm: e.target.value })
        }
    }

    getAutocompletedResults(e) {
        this.setState({
            searchTerm: e.target.value
        }, () => {
            $.getJSON('/search_songs?q=' + this.state.searchTerm).then(res => {
                this.setState({ songResults: res.items })
            })
            $.getJSON('/search_users?q=' + this.state.searchTerm).then(res => {
                this.setState({ userResults: res.items })
            })
        })
    }

    render() {
        let songList = this.state.songResults.map((res, idx) => {
            return (
                <li key={idx} className="dropdown-li">
                    <h4>{res.title}</h4>
                    <h4>{res.artist}</h4>
                    <h4>{res.album_name}</h4>
                    <img src={res.imageUrl} alt={`album cover for ${res.title}`}/>
                </li>
            )
        })

        let userList = this.state.userResults.map((res, idx) => {
            let image = res.imageUrl ? res.imageUrl : window.cloud
            return (
                <li key={idx} className="dropdown-li">
                    <h4>{res.username}</h4>
                    <img className="search-img" src={image} alt={res.username} />
                </li>
            )
        })

        document.addEventListener("click", (e) => {
            let searchZone = document.getElementById("search-bar-cont")

            if (e.target !== searchZone) this.setState({ songResults: [], userResults: [], searchTerm: "" })
        })
        let songHeader = "";
        let userHeader = "";
        if (this.state.songResults.length > 0) songHeader = <li className="header-li">SONGS</li>
        if (this.state.userResults.length > 0) userHeader = <li className="header-li">USERS</li>

        return (
            <div className="nav-links" id="search-bar-cont">
                <input className="search-bar"
                    placeholder="Search LoudCloud"
                    spellCheck="false"
                    value={this.state.searchTerm}
                    onChange={this.getAutocompletedResults} />
                {/* <button className="search-button">Search</button> */}
                <ul className="results-dropdown">
                    {songHeader}
                    {songList}
                    {userHeader}
                    {userList}
                </ul>
            </div>
        )
    }
}

export default Search;