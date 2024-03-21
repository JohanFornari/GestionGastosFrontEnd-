import React from 'react';
import UserProfile from './UserProfile';
import Incomes from './Incomes';

function Sidebar() {
  const showPanel = (panelId) => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      panel.style.display = 'none';
    });

    const panelToShow = document.getElementById(panelId);
    panelToShow.style.display = 'block';
  };

  return (
    <div className="d-flex">
      <div className="sidebar bg-light p-4 vh-100 d-flex justify-content-between flex-column" >
      <div>
        <h5 className="sidebar-heading mb-4">Dashboard</h5>
        <hr/>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('usuario')}><i className="bi bi-person-lines-fill"></i> Datos del Usuario</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('ingresos')}><i className="bi-cash-coin"></i> Ingresos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('categorias')}><i className="bi bi-clipboard"></i> Categorías</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('subcategorias')}><i className="bi bi-journals"></i> Subcategorías</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('gastos')}><i className="bi bi-cash"></i> Gastos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#" onClick={() => showPanel('estadisticas')}><i className="bi bi-graph-up"></i> Estadísticas</a>
          </li>
        </ul>
        </div>

          <div className="dropdown open">
            <a className="text-decoration-none text-black dropdown-toggle p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className='bi bi-person-circle'>
                <span className='ms-2'>Usuario</span>
              </i>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">Info</a>
              <a className="dropdown-item" href="#">Cerrar Sesión</a>
            </div>
          </div>

      </div>

      <div className="content col-md-9">
        {/* Contenido de la página */}
        <div id="usuario" className="panel" style={{ display: 'none' }}>
          <UserProfile />
        </div>
        <div id="ingresos" className="panel" style={{ display: 'none' }}>
          <Incomes />
        </div>
        <div id="categorias" className="panel" style={{ display: 'none' }}>
          <h2>Categorías</h2>
          <p>Contenido del panel de Categorías.</p>
        </div>
        <div id="subcategorias" className="panel" style={{ display: 'none' }}>
          <h2>Subcategorías</h2>
          <p>Contenido del panel de Subcategorías.</p>
        </div>
        <div id="gastos" className="panel" style={{ display: 'none' }}>
          <h2>Gastos</h2>
          <p>Contenido del panel de Gastos.</p>
        </div>
        <div id="estadisticas" className="panel" style={{ display: 'none' }}>
          <h2>Estadísticas</h2>
          <p>Contenido del panel de Estadísticas.</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;