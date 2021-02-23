import React from "react"
// import ReactDOM from "react-dom"
import {connect} from 'react-redux'
// import {addInputs, subtractInputs} from '../actions/calculatorActions'
const mapStateToProps = (state) => ({
  output:state.output
})
export class Home extends React.Component{
 render(){
  // let IntegerA,IntegerB,IntegerC,IntegerD;
  return(
   <div className="container">
      ...... 
      ....
      ..
   </div>
  );
 }
}export default connect(mapStateToProps)(Home)