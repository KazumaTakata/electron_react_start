import React from 'react';
import ReactDOM from 'react-dom';

class Databasesql extends React.Component {


    constructor(props){
        super(props)
        

        this.state = {result:
                        { columnName: ["id", "name", "age"],
                          data: [
                              {id: 1, name: "one ok", age: 23},
                              {id: 2, name: "safo", age: 24}
                        ]
                        }
                    }

        this.rowsRender = this.rowsRender.bind(this)
    }

    keyRender(keys) {
         return keys.map((key, index) => {
            return (
            <th>
                {key}
            </th>
            )
        })
    }

    rowsRender(){
        return this.state.result.data.map((d, index) => {
            return (
                <tbody>
                <tr>
                    {this.state.result.columnName.map((key) =>{
                        return (
                            <td>
                             { d[key] }
                            </td>
                        )
                    })
                    }
                </tr>
                </tbody>
            )
           
        })
    }

    render() {
        return (
            <div className="sql__container">
                <textarea name="" id="" ></textarea>
                <div>
                <table>
                <tbody>
                    <tr>
                        {this.keyRender(this.state.result.columnName)}
                    </tr>
                </tbody>
                {this.rowsRender()}              
              </table>
                </div>
            </div>
        );
    }
}
export default Databasesql