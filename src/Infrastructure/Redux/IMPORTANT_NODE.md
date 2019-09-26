## stop using redux because of following reasons

1. need to implement reducers
2. need to implement cache and api request strategy 
  - e.g., have to use thunk and need to some logic about checking cache and if does not exist, does api request

## current redux implementation (Redux folder)

  - i did try to implement reducer logic in OOP way to make it easy to maintain and modify
  - it currently does not work because of mis-implementation of contravariance of dependency inject (inversifyjs)
  - if need to implement this feature in future, fix following:
    1. make all types of state and actions interfaces
    2. register (bind) to dependency injection.
    3. you can achieve resolving dependency contravariantly

## alternative approach 

  - use apollo client
