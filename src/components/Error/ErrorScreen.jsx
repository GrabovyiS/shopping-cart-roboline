import "./ErrorScreen.css";

function ErrorScreen({ error }) {
  return (
    <div className="error">
      <h2>Error: {error.message}</h2>
      <p>An error has occurred. Please, reload the page.</p>
    </div>
  );
}

export default ErrorScreen;
