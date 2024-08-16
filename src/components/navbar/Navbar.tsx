import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-50 to-lime-200 text-green-500 flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">Farmácia Olivier</div>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/produto" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categoria" className="hover:underline">
              Categorias
            </Link>
            <Link to='/contato' className="hover:underline">Contato</Link>
            <div className="hover:underline">Sair</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
