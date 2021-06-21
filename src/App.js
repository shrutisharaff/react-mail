import React from 'react';
import './App.css';
import Spam from "./spam.json";
import Inbox from "./inbox.json";
import Comp from './Comp';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "inbox",
      currentItem: "",
    }
  }
  myClickHandler =(e)=>{
    this.setState({currentPage: e.target.name})
  }
    render(){
      let items1=Inbox.map((item)=>{
        return <Comp subject={item.subject} content={item.content} />
      })
      let items2=Spam.map((item)=>{
        return <Comp subject={item.subject} content={item.content} />
      })
        return(
            <div class="main">
                <div class="main1">
                    <div class="left1"></div>
                    <div class="right1"><h2>Outlook Mail</h2></div>
                </div>
                <div class="main2">
                    <div class="left2">Search Mail and People</div>
                    <div class="right2">
                      <div class="new">
                        <select name="new" id="new">
                          <option>New |</option>
                        </select>
                      </div>
                      <div class="mark">Mark all as read</div>
                    </div>
                </div>
                <div class="main3">
                    <div class="left3">
                        <h3 class="folder1">Folders</h3>
                        <a name="inbox" style={{paddingLeft: 100,paddingBottom: 10}} class="inbox1" class={this.state.currentPage=="inbox"?"active":""} onClick={this.myClickHandler}
>Inbox</a>
                        <a name="spam" style={{paddingLeft: 100,paddingBottom: 10}} class="spam1" class={this.state.currentPage=="spam"?"active":""} onClick={this.myClickHandler}
>Spam</a>
                        <a name="delete"  style={{paddingLeft: 100,paddingBottom: 10}} class="delete1" class={this.state.currentPage=="delete"?"active":""} onClick={this.myClickHandler}
>Deleted Items</a>
                    </div>
                    <div class="mid3">
                        <div className="sidebar">
                          <div className="header">
                            <div className="h1"><p>Focused</p></div>
                            <div className="h2"><p>Other</p></div>
                            <div className="h3">
                              <select name="Filter" id="filter">
                                <option value="Filter">Filter</option>
                              </select>
                            </div>
                          </div>
                        {this.state.currentPage=="inbox" ? items1:items2}
                      </div>
                    </div>
                    <div class="right3"></div>
                </div>
            </div>
        )
    }
}
export default App;