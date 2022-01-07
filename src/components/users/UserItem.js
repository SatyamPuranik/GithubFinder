import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

// class UserItem extends Component {
//   // state={
//   //   id:'id',
//   //   login:'mojombo',
//   //   avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
//   //   html_url:'https://github.com/mojombo'
//   // };

//   render() {
//     // const { login,avatar_url,html_url  } = this.state;
//     const { login,avatar_url,html_url  } = this.props.user;
    
//     return <div className="card text-center"> 
//         <img src={avatar_url} className="round-img" style={{width:'60px'}}/>
//         <h3>{login}</h3>

//         <div>
//           <a href={html_url} className="btn btn-dark btn-sm my-1">
//             More
//           </a>
//         </div>
//     </div>
//   }
// }



const UserItem = ({user:{ login,avatar_url,html_url  }}) => {
  // from props we first took out users, then from users we took out login,avatar_url,html_url
    
    return <div className="card text-center"> 
        <img src={avatar_url} alt="img" className="round-img" style={{width:'60px'}}/>
        <h3>{login}</h3>

        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
    </div>
}

UserItem.propTypes={
    user: PropTypes.object.isRequired
};

export default UserItem