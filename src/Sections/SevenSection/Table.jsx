import React from 'react'
import TableCard from './TableCard'

const Table = () => {
    return (
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-26 gap-y-10 pt-[2.5%] pl-1">
            <div >
                <TableCard img={`/Seven/People.png`} name={`Vladimir Krupnik`} work={`CBO`} desc={`MRAM fabrication, NVM,<br/> MCU, Fab construction`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Uri Darvish`} work={`Financial Controller`} desc={`Senior Finance leadership<br/> in High-tech industry`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Menachem Shoval`} work={`COO`} desc={`Strategic Sourcing / EMEA<br/> Microelectronic fabrication`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Doron<br/> Nevo`} work={`Investments`} desc={`Management and business in tech`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Prof. Ching<br/> Ray Chang`} work={`Fabs Advisor`} desc={`NTU-IBM. Quantum Computer Hub`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Prof. Yosi Shacham-<br/>Diamand`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
            </div>
            <div >
                <TableCard img={`/Seven/People.png`} name={`Avi Mendelson`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
            </div>
        </div>
    )
}

export default Table
