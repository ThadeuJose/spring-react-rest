import React from "react";
import { QueryClientProvider, QueryClient } from 'react-query'
import EmployeesList from "./page/EmployeeList";

export default class App extends React.Component {
  
  constructor(){
    super()
    this.queryClient = new QueryClient()
  }  

  render(){
    return <QueryClientProvider client={this.queryClient}><EmployeesList /></QueryClientProvider>;
  }
}
