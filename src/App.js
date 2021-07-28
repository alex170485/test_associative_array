import "./styles.css";
import Button, { VARIANT, SIZE } from './Button';


export default function App() {
  return (
    <div className="App">
      <Button variant={VARIANT.BLUE} size={SIZE.BIG} />
    </div>
  );
}
