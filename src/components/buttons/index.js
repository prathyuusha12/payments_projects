import { Link } from "react-router-dom";

const Buttons = () => {
    const list = [
        { name: "Profile", link: "/profile" },
        { name: "Trasaction History", link: "/history" },
        { name: "Payment", link: "/payment" },
        { name: "Logout", link: "/home" },
    ];
    const options = list.map((item, index) => {
        console.log(item);
        console.log(index);
        return (
            <li key={index}>
                <Link to={item.link}>
                    <button type="button" class="btn btn-primary btn-lg" >{item.name}</button>
                </Link>
            </li>

        )
    });
    return (
        <div class="col-5">
            <ul>
                {options}
            </ul>
        </div>

    )
}
export default Buttons;