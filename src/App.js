import React from 'react';
import './style.css';
import { increment, decrement } from './redux/index.js';
import { connect, useSelector, useDispatch } from 'react-redux';
//new to access state , actions of redux using useSelector()

function App(props) {
  const count = useSelector((count) => count);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <p>{count}</p>

      <div className="flex">
        {/* <button onClick={props.inc}>+</button> */}
        <button onClick={() => dispatch(increment())}>+</button>

        {/* <button onClick={props.dec}>-</button> */}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

// function mapStateToProps(globalState) {
//   return {
//     count: globalState,
//   };
// }
// const mapDispatchToPropsFunc = {
//   inc: increment,
//   dec: decrement,
// };

// old way to access redux action , etc
// export default connect(mapStateToProps, mapDispatchToPropsFunc)(App);

export default App;
