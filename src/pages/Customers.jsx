import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page,
          Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

const Customers = () => {
  const {currentMode } = useStateContext();
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl'>
    <Header category="Page" title="Customers" />
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <GridComponent
      id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting: true, allowEditing:true}}
      width="auto"
      >
        <ColumnsDirective>
           {customersGrid.map((item,index)=>
          ( <ColumnDirective key={index}{...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[ Edit, Selection, Filter, Page, Toolbar, Sort ]} />
      </GridComponent>
    </div>
    </div>
  )
}

export default Customers