import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


// export class Navbar extends Component {
//   // Props are propeties which can be passed into our component from outside. If porps are passed then they will overwrite default props, else default props will be used.
//   static defaultProps={
//     title: 'Github Finder',
//     icon:'fab fa-github'
//   };

//   // propTypes will do type checking of props, if types do not match then we will get a waring in our console. No errors.
//   static propTypes={
//     title:PropTypes.string.isRequired,
//     icon:PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon}></i> {this.props.title}
//         </h1>
//       </nav>
//     )
//   }
// }







const Navbar = (props) => {
  const {icon,title}=props;

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* We are not using a tags here because if we go from one page to another it would clear the state of the first page. */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps={
  title: 'Github Finder',
  icon:'fab fa-github'
};

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  icon:PropTypes.string.isRequired
};

export default Navbar