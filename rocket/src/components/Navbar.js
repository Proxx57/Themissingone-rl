
import { Link } from "react-router-dom";

export default function Navbar() {


	return (
		<header>
			<nav>
				<ul className="list">
					<div className="divider"></div>
					<li className="items">
						<Link to="/" className="hover-1">
							Accueil
						</Link>
					</li>
					<div className="divider"></div>
					<li className="items">
						<Link to="/Contact" className="hover-1">
							Nous contacter
						</Link>
					</li>
				</ul>
			</nav>
		</header>

	);
}
