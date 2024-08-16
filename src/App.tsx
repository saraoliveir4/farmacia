import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Produto from './pages/produto/Produto';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormCategorias from './components/categorias/formCategorias/FormCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<Produto />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategorias" element={<FormCategorias />} />
              <Route path="/editarCategorias/:id" element={<FormCategorias />} />
              <Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App;