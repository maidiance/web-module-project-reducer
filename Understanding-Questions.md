# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick handler fires.
* The dispatch method is called.
* addOne() fires, returning {type:ADD_ONE}.
* reducer(state, ADD_ONE) fires.
* state is updated.
* DOM re-renders total.
...

* TotalDisplay shows the total plus 1.
