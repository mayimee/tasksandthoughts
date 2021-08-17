import './App.css';
import ThoughtsTracker from './components/ThoughtsTracker';
import TaskTracker from './components/TaskTracker';

function App() {
  return (
    <div className="mainDiv" style={{backgroundImage: 'url("/./src/bg.jpg")'}}>
        <ThoughtsTracker />
        <TaskTracker />
    </div>
  );
}

export default App;
