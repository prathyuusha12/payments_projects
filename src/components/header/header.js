import NavItems from "../navitems";

const Header = () => {
  let headerName = "Bank";
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-sm
          navbar-dark bg-primary" >
        <div class="container-fluid">
          <a class="navbar-brand" href="home">{headerName}</a>
          <NavItems />
        </div>
      </nav>
    </div>

  )
}
export default Header;