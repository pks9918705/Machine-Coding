
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {


  useEffect(() => {

    const observer = new IntersectionObserver(function (entries) {

      // console.log('enter', entries);
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.backgroundColor='red'
          console.log(entry.target)

        }
      }
      )

    }
    )




    const target = document.querySelector('#special')

    //single item ko observe krna hai toh aise and for mutliple k liye make use of loop
    observer.observe(target)
  }, [])


  return (
    <div className="App">
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box" id='special'>6</div>
    </div>
  );
}

export default App;
