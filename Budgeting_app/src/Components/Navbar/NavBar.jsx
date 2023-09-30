import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <header className='header'>
            <div>
      <img src="../images/budget-logo.png" className='logo'/>
            </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    </li>
                <li>
                    <Link to='Transaction-List'> Transaction List</Link>
                    </li>
                <li>
                    <Link to='Transaction-Form'>Transaction Form</Link>
                    </li>
            </ul>
        </nav>
        </header>
    </div>
  )
}
