import React, { Component } from 'react'

export default class NQNProductAdd extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            title:'',
            status:''
        }
    }
    NQNHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    //submit form
    NQNHandleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    ID
                </span>
                <input
                    type="text"
                    className="form-control"
                    name='id'
                    value={this.state.id}
                    onChange={this.NQNHandleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                    Title
                </span>
                <input
                    type="text"
                    className="form-control"
                    name='title'
                    value={this.state.title}
                    onChange={this.NQNHandleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                    Status
                </span>
                <input
                    type="text"
                    className="form-control"
                    name='status'
                    value={this.state.status}
                    onChange={this.NQNHandleChange}
                />
            </div>
            <button className='btn btn-success' onClick={this.NQNHandleSubmit}>Ghi Lại</button>
        </form>
      </div>
    )
  }
}
