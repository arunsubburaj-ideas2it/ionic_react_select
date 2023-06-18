import React, { useState, useRef, useEffect } from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

import './main.css';

function Example() {

  const [currentFruit, setCurrentFruit] = useState('');
  const fruitSelectRef = useRef(null);

  useEffect(() => {
    function handleKeyup(e: any) {
      if(e.key == "Enter" && e.target.closest("ion-select-popover")){
        console.log(fruitSelectRef.current);
        var popoverEle = e.target.closest("ion-popover");
        console.log(popoverEle.lastFocus.value);
        setCurrentFruit(popoverEle.lastFocus.value);
        popoverEle.dismiss();
      }
    }
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, []);
  // The empty dependency array ensures the event listener is only added once

  interface Fruits {
    value: string;
    viewValue: string;
  }
  const fruits: Fruits[] = [{
    value: "apple", viewValue: "Apple"
  }, {
    value: "orange", viewValue: "Orange"
  }, {
    value: "banana", viewValue: "Banana"
  }, {
    value: "kiwi", viewValue: "Kiwi"
  }];
  return (
    <IonSelect placeholder="Select fruit" ref={fruitSelectRef} interface='popover' value={currentFruit}>
      {
        fruits.map((fruit, i) => (
          <IonSelectOption key={i} value={fruit.value} >{fruit.viewValue}</IonSelectOption>
        ))
      }
    </IonSelect>
  );
}
export default Example;
