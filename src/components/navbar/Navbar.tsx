import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)
  
  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
}

let navbarComponent

  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-50 to-lime-200 text-green-500 flex justify-center py-4">
        <div className="container flex justify-between text-lg">
        <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Olivier</Link>

          <div className="flex gap-4">
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to='/cadastroCategorias' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
