import {Link} from "react-router-dom";

export default function BlueLink({name, href, text}: { name: string; href: string, text?: string }) {
    return (
        <Link to={href}
              target="_blank"
              rel="noopener noreferrer"
        >
            <div className="font-normal">{text ? `${text}: ` : ''}
                <span
                    className="text-blue-500 hover:text-blue-600 hover:underline">{name}</span>
            </div>
        </Link>
    )
}