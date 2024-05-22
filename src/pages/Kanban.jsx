import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban'

import {kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return(
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
     <Header category="App" title="Kanban"/>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'> 
      <KanbanComponent
        id="Kanban"
        dataSource={kanbanData}
        cardSettings={{contentField: 'Summary', headerField: 'Id' }}
        keyField="Status"
        >
        <ColumnsDirective>
        {kanbanGrid.map((item, index)=>
        <ColumnDirective key={index}{...item}
        />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
    </div>
  )
}

export default Kanban