import React, { Component } from 'react'; 
import './App.css';

import Student from './components/Student.js';


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="leaderBoard">Leaders Board</h1>
        <h1 className="leaderboard"> Learders Board </h1>
      <Student name="Danial" university="PAF-KIEt" score={551} />
      <Student name="Fahad Ahmed" university="LUMS" score={541} />
      <Student name="Syed Muhammad Ali" university="IBA" score={530} />
      <Student name="Areeba Sheikh" university="NED" score={519} />
      <Student
        name="Bilal Chaudhry"
        university="Bahria University"
        score={500}
      />
      <Student name="Rehan Ahmed" university="Iqra University" score={500} />
      <Student name="Saboor Baig" university="PAF-kIET" score={495} />
      <Student name="Imran Javed" university="NUSt" score={480} />
      <Student name="Wamic Nisar" university="NED" score={450} />
      <Student name="Younus Rana" university="LUMS" score={450} />
      <Student name="Saim Ansari" university="IBA" score={400} />
      </div>
    );
  }
 
    
  
}

export default App;
