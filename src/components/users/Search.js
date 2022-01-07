import React, { useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = ( ) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');
  // text is peice of state & setText is the method to change this piece of state. '' is default value

  //Function within a function
  const onChange = (e) => setText(e.target.value) 

  const onSubmit = (e) => {
    e.preventDefault();

    if(text === ''){
      alertContext.setAlert('Please enter something','light');
    }else{
      githubContext.searchUsers(text);
      
      setText('');
    }
  }

    return (
      // We are not doing onSubmit={this.onSubmit} because this is a function and not class
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
          <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>

        {githubContext.users.length > 0  && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear</button>}
        
      </div>
    )
}


export default Search;



// import React, { Component } from 'react';
// import PropTypes from 'prop-types';


// export class Search extends Component {
//   state= {
//     text : ''
//   };

//   static propTypes = {
//     searchUsers : PropTypes.func.isRequired,
//     clearUsers : PropTypes.func.isRequired,
//     showClear : PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired
//   };

//   onChange = (e) => this.setState({text: e.target.value})
//   // onChange = (e) => this.setState({[e.target.name]: e.target.value})

//   onSubmit = (e) => {
//     e.preventDefault();

//     if(this.state.text === ''){
//       this.props.setAlert('Please enter something','light');
//     }else{
//       this.props.searchUsers(this.state.text);
//       //Passing up the value this.state.text up to App.js using props.
      
//       this.setState({ text : ''});
//       // clear the form
//     }
//   }

//   render() {
//     const { showClear,clearUsers } = this.props;

//     return (
//       <div>
//         <form onSubmit={this.onSubmit} className='form'>
//           <input type='text' name='text' placeholder='Search Users...' value={this.state.text} onChange={this.onChange} />
//           <input type='submit' value='Search' className='btn btn-dark btn-block'/>
//         </form>

//         {showClear && <button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>}
        
//       </div>
//     )
//   }
// }

// export default Search