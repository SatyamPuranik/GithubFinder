import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User = ({ match}) => {
  const githubContext = useContext(GithubContext);

  const {getUser, loading, user, repos, getUserRepos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);

    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = user;


  if(loading){
    return <Spinner />
  }else{
    return(
      <Fragment>
        <Link to='/' className='btn btn-light'> 
          Back To Search
        </Link>

        Hireable : {' '}
        {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round-img" alt="Avtar" style={{width : '150px'}} />

            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && <Fragment>
                <h3>Bio</h3>  
                <p>{bio}</p>
              </Fragment>}
            <a href={html_url} className="btn btn-dark my-1" >
              Vist GitHub Profile
            </a>

            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username: </strong>{login}
                  </Fragment>}
              </li>
              <li>
                {company && <Fragment>
                  <strong>Company: </strong>{company}
                  </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>Website: </strong>{blog}
                  </Fragment>}
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">
            Followers: {followers}
          </div>
          <div className="badge badge-success">
            Following: {following}
          </div>
          <div className="badge badge-light">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-dark">
            Public Gists: {public_gists}
          </div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }
}



export default User;









// import React, { Component,Fragment } from 'react';
// import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import Repos from '../repos/Repos'


// export class User extends Component {
//   componentDidMount() {
//     this.props.getUser(this.props.match.params.login);
//     // pulling login from url

//     this.props.getUserRepos(this.props.match.params.login);
//   }

//   static propTypes= {
//     loading: PropTypes.bool.isRequired,
//     user: PropTypes.object.isRequired,
//     getUser: PropTypes.func.isRequired,
//     getUserRepos: PropTypes.func.isRequired,
//     repos: PropTypes.array.isRequired
//   }

//   render() {
//     const {name,
//       company,
//       avatar_url,
//       location,
//       bio,
//       blog,
//       login,
//       html_url,
//       followers,
//       following,
//       public_repos,
//       public_gists,
//       hireable
//     } = this.props.user;

//     const { loading, repos } =this.props;

//     if(loading){
//       return <Spinner />
//     }else{
//       return(
//         <Fragment>
//           <Link to='/' className='btn btn-light'> 
//             Back To Search
//           </Link>

//           Hireable : {' '}
//           {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

//           <div className="card grid-2">
//             <div className="all-center">
//               <img src={avatar_url} className="round-img" alt="Avtar" style={{width : '150px'}} />

//               <h1>{name}</h1>
//               <p>Location: {location}</p>
//             </div>
//             <div>
//               {bio && <Fragment>
//                   <h3>Bio</h3>  
//                   <p>{bio}</p>
//                 </Fragment>}
//               <a href={html_url} className="btn btn-dark my-1" >
//                 Vist GitHub Profile
//               </a>

//               <ul>
//                 <li>
//                   {login && <Fragment>
//                     <strong>Username: </strong>{login}
//                    </Fragment>}
//                 </li>
//                 <li>
//                   {company && <Fragment>
//                     <strong>Company: </strong>{company}
//                    </Fragment>}
//                 </li>
//                 <li>
//                   {blog && <Fragment>
//                     <strong>Website: </strong>{blog}
//                    </Fragment>}
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="card text-center">
//             <div className="badge badge-primary">
//               Followers: {followers}
//             </div>
//             <div className="badge badge-success">
//               Following: {following}
//             </div>
//             <div className="badge badge-light">
//               Public Repos: {public_repos}
//             </div>
//             <div className="badge badge-dark">
//               Public Gists: {public_gists}
//             </div>
//           </div>

//           <Repos repos={repos} />
//         </Fragment>
//       );
//     }
//   }
// }

// export default User
