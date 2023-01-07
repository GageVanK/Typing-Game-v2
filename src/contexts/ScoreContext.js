import React, {useContext, useState} from "react";

//https://reactjs.org/docs/context.html
// Create a ScoreContext object with a default value of -1
const ScoreContext = React.createContext(-1);

// Custom hook for accessing the value stored in ScoreContext
const useScore =  () => useContext(ScoreContext);

// Provider component for ScoreContext
const ScoreProvider = ({children}) => {

  // Declare a state variable "score" with a default value of -1
  const[score, setScore] = useState(-1);

  // Render children within a ScoreContext.Provider element
  // to provide the ScoreContext value to the component tree
  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  );
};

// Export ScoreProvider and useScore for use in other components
export { ScoreProvider, useScore };
