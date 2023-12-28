import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Alert lifeTimeMs={5000}>This is Alert</Alert>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Button
          onClick={() => {
            console.log("clicked !");
          }}
        >
          Primary Button
        </Button>

        <Button
          color="secondary"
          onClick={() => {
            console.log("clicked !");
          }}
        >
          Secondary Button
        </Button>
      </div>
    </>
  );
}

export default App;
