import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>

            <div>
                <button><Link to={"/create"}>Create</Link></button>
                <button><Link to={"/join"}>Join</Link></button>
            </div>
        </div>
    );
}

export default HomePage;