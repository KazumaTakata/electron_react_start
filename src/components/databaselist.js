import React from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

class DatabaseList extends React.Component {

    constructor(props){
        super(props)
        

        this.state = {data:
                        [
                        {database: "database1", table: ["table1", "table2"], open: false},
                        {database: "database1", table: ["table1"], open: false},
                        {database: "database1", table: ["table1"], open: false}
                     ]}

        this.renderDatabaseList = this.renderDatabaseList.bind(this)
        this.openTable = this.openTable.bind(this)
    }

    openTable(index, e){
        console.log(index)
        this.setState( update(this.state, {data: {[index]: {open: {$set: !this.state.data[index].open } }} } ))
    }

    renderDatabaseList(){
         return this.state.data.map( (databaseitem, index) =>{
            return <div>      
                   <li onClick={(e) => this.openTable(index, e) } key={index}>
                      { databaseitem.database }
                   </li>
                   {  this.state.data[index].open &&
                   <ul>
                        {
                            databaseitem.table.map((table, index) => {
                                return <li key={index}> 
                                            {table}
                                       </li>
                            })
                        }
                  </ul>
                }
                  </div>
        } )
    }

    render() {
        return (
            <div className="databaselist__container">
                <ul>
                    {this.renderDatabaseList()}
                </ul>
            </div>
        );
    }
}
export default DatabaseList