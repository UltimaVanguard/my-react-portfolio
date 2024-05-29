function Nav({ currentPage, handlePageChange}) {
    return (
    <ul className="navgation nav nav-tabs">
      <li className="nav-item">
        <a
        // Nav link for the home page
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Sets link to active if it's the currentPage
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
        // Nav link for about page
          href="#about"
          onClick={() => handlePageChange('About')}
          // Sets link to active if it's the currentPage
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  Sets link to active if it's the currentPage
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          // Sets link to active if it's the currentPage
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    )
}

export default Nav;