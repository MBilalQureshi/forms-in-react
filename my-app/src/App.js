import css from './App.module.css';
import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForms';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* Uncomment any from below to revise */}
      {/* <ControlledForm /> */}
      <UnControlledForm />
    </div>
  );
}

export default App;