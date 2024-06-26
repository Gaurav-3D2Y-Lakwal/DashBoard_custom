import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,
         Page, Search, Inject, Toolbar, Sort} from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';



const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl'>
    <Header category="Page" title="Employees" />
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <GridComponent
      id="gridcomp"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
      >
        <ColumnsDirective>
           {employeesGrid.map((item,index)=>
          ( <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[ Search, Page, Toolbar, Sort ]} />
      </GridComponent>
    </div>
    </div>
  )
}

export default Employees;