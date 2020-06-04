import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width: '100%',
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customer = [
  {
    'id':1,
  'name':'홍길동',
  'birthday':'202020',
  'image':'https://placeimg.com/64/64/any1'
  },
  {
    'id':2,
    'name':'김철수',
    'birthday':'202021',
    'image':'https://placeimg.com/64/64/any2'
  },
  {
    'id':3,
    'name':'수수다',
    'birthday':'202022',
    'image':'https://placeimg.com/64/64/any3'
  }
]

class App extends Component {
  render(){
    const gg = this.props;
    return (
      <Paper className={gg.root}>
        <Table className={gg.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map(c=>{
            return (
              <Customer
                name={c.name}
                birthday={c.birthday}
                id={c.id}
                image={c.image}
              />
            )
          })}
        </TableBody>

        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
