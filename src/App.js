import logo from './logo.svg';
import './App.css';

function App() {
  let firstName="Ananda";
  let lastName="Hassan";
  let age=23;
  let job="Intern";
  let getFullName=(firstName,lastName)=>
  `${firstName} ${lastName}`
  let placeholder="Enter your details";
  let blog={
    title:"Blog 1",
    descriptison:"lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor "
  }
  return (
    <div className="App">
      <h1>{getFullName(firstName,lastName)}</h1>
      <p>{age}</p>
      <p>{job}</p>
      <input placeholder={placeholder} autoComplete></input>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.descriptison}</p>
      
      </div>
      <hr></hr>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.descriptison}</p>
      
      </div>
    </div>
  );
}

export default App;
