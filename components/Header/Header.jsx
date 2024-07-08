import { ModeToggle } from "../ui/ModeToggle";

export default function Header(){
    return(
        <header className="sticky bg-transparent backdrop-blur flex items-center justify-between  ">
            <p>Dashboard</p>
            <nav>
                <ul>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>



    )
}