const tableBodyTrs = document
    .querySelectorAll(".tableBody")
    .querySelectorAll(".tr");
    console.log(tableBodyTrs);

    function createForm() {
        let form = document.createElement("form");

        form.innerHtml=`
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
        `;

        return form;
    }
    (async ()=> {
        tableBodyTrs.forEach((tr) => tr.appendChild(createForm()));
    })();