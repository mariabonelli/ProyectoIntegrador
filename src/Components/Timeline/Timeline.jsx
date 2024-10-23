import "./TimelineStyle.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="container_timeline right primero">
        <div className="content_timeline">
          <h2>Pendiente</h2>
          <p>26/08/2024 10:30 Hrs.</p>
          <p>Notificado ✓</p>
        </div>
      </div>
      <div className="container_timeline right segundo">
        <div className="content_timeline">
          <h2>Evaluado</h2>
          <p>27/08/2024 10:30 Hrs.</p>
          <p>Notificado ✓</p>
        </div>
      </div>
      <div className="container_timeline right tercero">
        <div className="content_timeline">
          <h2>Pagado</h2>
          <p>28/08/2024 10:00 Hrs.</p>
          <p>Notificado ✓</p>
        </div>
      </div>
      <div className="container_timeline right cuarto">
        <div className="content_timeline">
          <h2>Finalizado</h2>
          <p>30/08/2024 12:30 Hrs.</p>
          <p>Notificado ✓</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
