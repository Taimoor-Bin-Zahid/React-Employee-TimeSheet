import React from 'react'

function Employee() {
    // const tableBodyTrs = document
    // .querySelectorAll(".tableBody")
    // .querySelectorAll(".tr");
    // console.log("tableBodyTrs");

    // function createForm() {
    //     let form = document.createElement("form");

    //     form.innerHtml=`
    //     <th>
    //     <input type='text' class='orange' placeholder='Enter Day'></input>
    // </th>
    // <td>
    //     <input type='time' class='green' id='start-work' ></input>
    // </td>
    // <td>
    //     <input type='time' class='blue' id='start-break' ></input>
    // </td>
    // <td>
    //     <input type='time' class='blue' id='end-breakk' ></input>
    // </td>
    // <td>
    //     <input type='time' class='blue' id='end-work' ></input>
    // </td>
    // <td>
    //     <input class='WorkedHours purple' value={"00:00"} disabled></input>
    // </td>
    // <td>
    //     <button class='btn' type='submit'>add</button>
    // </td>
    //     `;

    //     return form;
    // }
    // (async ()=> {
    //     tableBodyTrs.forEach((tr) => tr.appendChild(createForm()));
    // })();
  return (
    <div>
        <div className='container'>
            <header className='person'>
                <div className='person-avatar'></div>
                <h1 className='person-name'>Jane Doe</h1>
            </header>
            <section className='tableHead'>
                <input type={"text"} className="orange" value={'Days'} disabled></input>
                <input type={"text"} className="blue" value={'Start Work'} disabled></input>
                <input type={"text"} className="green" value={'Start Break'} disabled></input>
                <input type={"text"} className="green" value={'End Break'} disabled></input>
                <input type={"text"} className="blue" value={'End Work'} disabled></input>
                <input type={"text"} className="purple" value={'Hours / Days'} disabled></input>
            </section>
            <section className='tableBody'>
                <div className='tr'>
                    <form>
                    <th>
                        <input type='text' class='orange' placeholder='Enter Day'></input>
                    </th>
                    <td>
                        <input type='time' class='green' id='start-work' ></input>
                    </td>
                    <td>
                        <input type='time' class='blue' id='start-break' ></input>
                    </td>
                    <td>
                        <input type='time' class='blue' id='end-breakk' ></input>
                    </td>
                    <td>
                        <input type='time' class='blue' id='end-work' ></input>
                    </td>
                    <td>
                        <input class='WorkedHours purple' value={"00:00"} disabled></input>
                    </td>
                    <td>
                        <button class='btn' type='submit'>add</button>
                    </td>
                    </form>
                </div>
                <div className='tr'></div>
                <div className='tr'></div>
                <div className='tr'></div>
                <div className='tr'></div>
                <div className='tr'></div>
                <div className='tr'></div>
            </section>
            <section className='tableFooter'>
                <input  class='red' value="Total" disabled></input>
                <input  id="totalWorkedHours" class='red' value="Work Hours" disabled></input>
            </section>
        </div>
    </div>
  )
}

export default Employee