import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>
                    <h2>{this.props.id}</h2>
                </TableCell>
                <TableCell>
                    <img src={this.props.image} alt="gg"></img>
                </TableCell>
                <TableCell>
                    <h2>{this.props.name}</h2>
                </TableCell>
                <TableCell>
                    <p>{this.props.birthday}</p>
                </TableCell>
            </TableRow>

            /*
            <div>
                <CustomerInfo id={this.props.id} image={this.props.image}/>
                <CustomerProfile name={this.props.name} birthday={this.props.birthday}/>
            </div>
            */
        )
    }
}

// class CustomerInfo extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2>{this.props.id}</h2>
//                 <img src={this.props.image} alt="gg"></img>
//             </div>
//         )
//     }
// }

// class CustomerProfile extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <p>{this.props.birthday}</p>
//             </div>
//         )
//     }
// }

export default Customer