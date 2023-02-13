import React from 'react'

function Employee() {
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
        </div>
    </div>
  )
}

export default Employee