import { useState } from "react";
import {Link} from 'react-router-dom'
import { Menus } from "./navbar";
export default function Sidebar() {

    const [open, setOpen] = useState(true);
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                {/* aqui é a img onde clica pra abrir e fechar o menu */}
                <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />

                <div className="flex gap-x-4 items-center">
                    {/* aqui é a img do raio que vai ser o emoji e onde ta escrito o titulo da aplicacao */}
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}/>

                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Gestão de prioridades
                    </h1>
                </div>

                {/* aqui é onde ta as minhas guias onde vai direcionar pra cada lugar */}

                <ul className="pt-6">
                    {Menus.map((item, index)=>{
                        return(
                            <li key={index} className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                                <Link to={item.path}>
                                    <img src={`./src/assets/${item.src}.png`} />
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {item.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
                    
        </div>
    )
}