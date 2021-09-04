import { Link } from "react-router-dom"
const NavItems = () => {
    const list = [
        { name: "CustomerLogin", link: "/customerlogin" },
        { name: "EmployeeLogin", link: "/employeelogin" },

    ];
    const navs = list.map((item, index) => {
        console.log(item);
        console.log(index);
        return (
            <li class="nav-item" key={index}>
                <Link className="nav-link" to={item.link}>{item.name}</Link>
            </li>
        )
    });
    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0">
                {navs}
            </ul>
        </div>
    )
};
export default NavItems;