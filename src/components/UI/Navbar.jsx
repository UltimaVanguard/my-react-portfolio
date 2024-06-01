export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* goes through each indivual link */}
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
}