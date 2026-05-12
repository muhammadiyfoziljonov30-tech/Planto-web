import { NavLink } from "react-router";

export default function Links({className}) {
    const links = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Plants Type',
            href: '/plants-type'   
        },
        {
            name:'More',
            href: '/more'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ];
  return (
    <div>
        <ul className={`flex items-center gap-15 ${className}`}>
            {links.map((link, index) => (
                <li key={index} className="text-2xl font-medium text-white">
                    <NavLink to={link.href}>{link.name}</NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}
