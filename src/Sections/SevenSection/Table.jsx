import React from 'react'
import TableCard from './TableCard'

const Table = () => {
    return (
        <div className="pt-[2.5%]  w-full">

            {/* Горизонтальная строка — только на мобилках */}
            <div className="flex sm:hidden overflow-x-auto gap-4 pb-4">
                <div className="flex gap-4 min-w-max px-2">
                    <TableCard img={`/Seven/People.png`} name={`Vladimir Krupnik`} work={`CBO`} desc={`MRAM fabrication, NVM,<br/> MCU, Fab construction`} />
                    <TableCard img={`/Seven/People.png`} name={`Uri Darvish`} work={`Financial Controller`} desc={`Senior Finance leadership<br/> in High-tech industry`} />
                    <TableCard img={`/Seven/People.png`} name={`Menachem Shoval`} work={`COO`} desc={`Strategic Sourcing / EMEA<br/> Microelectronic fabrication`} />
                    <TableCard img={`/Seven/People.png`} name={`Doron<br/> Nevo`} work={`Investments`} desc={`Management and business in tech`} />
                    <TableCard img={`/Seven/People.png`} name={`Prof. Ching<br/> Ray Chang`} work={`Fabs Advisor`} desc={`NTU-IBM. Quantum Computer Hub`} />
                    <TableCard img={`/Seven/People.png`} name={`Prof. Yosi Shacham-<br/>Diamand`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
                    <TableCard img={`/Seven/People.png`} name={`Avi Mendelson`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
                </div>
            </div>

            {/* Сетка — от sm и выше */}
            <div className="hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-26 gap-y-10">
                <TableCard img={`/Seven/People.png`} name={`Vladimir Krupnik`} work={`CBO`} desc={`MRAM fabrication, NVM,<br/> MCU, Fab construction`} />
                <TableCard img={`/Seven/People.png`} name={`Uri Darvish`} work={`Financial Controller`} desc={`Senior Finance leadership<br/> in High-tech industry`} />
                <TableCard img={`/Seven/People.png`} name={`Menachem Shoval`} work={`COO`} desc={`Strategic Sourcing / EMEA<br/> Microelectronic fabrication`} />
                <TableCard img={`/Seven/People.png`} name={`Doron<br/> Nevo`} work={`Investments`} desc={`Management and business in tech`} />
                <TableCard img={`/Seven/People.png`} name={`Prof. Ching<br/> Ray Chang`} work={`Fabs Advisor`} desc={`NTU-IBM. Quantum Computer Hub`} />
                <TableCard img={`/Seven/People.png`} name={`Prof. Yosi Shacham-<br/>Diamand`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
                <TableCard img={`/Seven/People.png`} name={`Avi Mendelson`} work={`Technology Advisor`} desc={`Tel Aviv University`} />
            </div>

        </div>
    )
}

export default Table
