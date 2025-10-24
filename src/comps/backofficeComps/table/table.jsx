import { useEffect, useState } from "react";
import styles from "./table.module.css";
import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

export default function table({ArrayToDisplay = [], deleteFunc, updateFunc}) {
    //Arrayen er den der skal vises, en array med objects.
    //updatefunc køres når update knappen klikkes.
    //delete func køres når delete knappen klikkes.


    //Få de keys der skal vises i tabellen.
    //Object.keys retunere nemlig en array med de keys i et object.
    const keysToDisplay = Object.keys(ArrayToDisplay[0]);

    const [shortenedArray, setShortenedArray] = useState([]); //En version af arrayen der skal vises,
    //med forkortet tekst.


    useEffect(() => {
      //Forkort teksten hver gang arrayen der skal vises ændre sig ændre sig.

      let arrayCopy = [...ArrayToDisplay]; //Lav en copy vi manipulere.

      //Loop over hele arrayen der skal vises.
      for(let i = 0; i < arrayCopy.length; i++) {
        
        //Derefter lav en ny array over hver key in dette objekt vi iterater over nu..
        const keys = Object.keys(arrayCopy[i]);

        //Loop over denne nye array af keys.
        for(let x = 0; x < keys.length; x++) {
          //Få så valuen, ved at gå in i hovedarrayen, på nuværende index, og tag keyen i key arrayen ved det nuværende index.
          let value = arrayCopy[i][keys[x]];

          if(typeof value != "string") continue; //Hvis ikke string, gå videre til næste iteration.

          if(value.includes("http://")) continue; //En web addresse. Ikke pille ved den.
          //continue starts with the next iteration. Break stops the loop completely.

          if(value.length < 97) continue;

          arrayCopy[i][keys[x]] = value.slice(0, 97) + "...";
        }
      }

      setShortenedArray(arrayCopy);

    }, [ArrayToDisplay]);




    return <div className={`${styles.tableCon}`}>
        <table> 
        <thead>
          <tr>
            {/* Loop over de keys der er i hvert object. Med fjern og update puttet på som ekstra ved alle sammen. */}
            {keysToDisplay.map((element, index) => {
              return <th key={index}>{element}</th>;
            })}
            <th>Fjern</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {shortenedArray.map((element, index) => {
            /* loop over hele arrayen med alle objekterne, og laver en ny row i tabellen. */
            return (
              <tr key={element._id}>
                {/* for hver row i tabellen, loop over alle keys fra vores array med alle keys som disse objekter har.
                 og for hver key retunere et felt i tabellen med array objektet value i den key vi har i den nuværende iteration.
                */}
                {keysToDisplay.map((e, i) => {
                  return (
                    <td key={i}>
                        {e == "image" || e == "img" ? 
                        <img src={element[e]}/>    
                        : 
                        <div>{element[e]}</div>
                        }
                    </td>
                  );
                })}

                {/* tilføj delete og update ikoner.*/}
                <td>
                  <MdDelete
                    onClick={() => {
                      deleteFunc(element);
                    }}
                  />
                </td>
                <td>
                  <MdUpdate
                    onClick={() => {
                      updateFunc(element);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


    </div>
}