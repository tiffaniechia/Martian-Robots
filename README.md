##Contents
1. Run Instructions
2. Design Decisions
3. Src File Structure
4. Code Challenge Question

---

##1.Run Instructions

To run application:
```
npm install
node main.js
```
To run tests:
```
jasmine-node spec/
```


##2.Design Decisions

Before I started the problem I had a few things in mind that I wanted to accomplish. I wanted to create an application that had the ability to extend easily, such that the addition of new features/business logic or new objects would affect as little of the rest of the code base as possible. I also wanted to application to adhere to the SOLID pattern as much as possible - in particular single responsibility. I also wanted to observe appropriate encapsulation was as well.


 |Directory|Files|Design Decision|
 |---|---|---|
 | **src/service** | input_service.js | Services simply gets data from resource (input.txt in this case), and returns a usable raw data. Service is created this way so that the application can easily switched to fetch data resources from other sources, for example a database,  (even if they presented a differing data resources structure) without affecting the rest of the code base. |
 | **src/mapper** | grid_mapper.js, robot_mapper.js | Mappers hold data logic that returns raw data into meaningful objects that can be consumed by the controller. Error handling is done here. |
 | **src/models** | grid.js, robot.js| Models are unware of the existence of anything beyond themselves. Extending these objects and adding new objects can hence be done at ease without affecting other parts of the code base. |
 | **src** | main_controller.js |  Contains all the core business logic. Since this has the highest propensity for change, it is not created as a dependency, rather it is dependent on objects with less propensity for change. |
 |**main.js**|| Serves as entry point into the application.|



##3.Src File Structure

```
src/
|_ mappers/
    |_ grid_mapper.js
    |_ robot_mapper.js
|_ models/
    |_ grid.js
    |_ robot.js
|_ service/
    |_ input_service.js  
|_ main_controller.js  


```  



##4.Code Challenge Question

###Problem: Martian Robots 

####The Problem 
The surface of Mars can be modelled by a rectangular grid around which robots are able to move according to instructions provided from Earth. You are to write a program that determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by y-coordinate) and an orientation (N, S, E, W for north, south, east, and west). A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:

- Left : the robot turns left 90 degrees and remains on the current grid point.
- Right : the robot turns right 90 degrees and remains on the current grid point.
- Forward : the robot moves forward one grid point in the direction of the current orientation and maintains the same orientation.

The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1). There is also a possibility that additional command types may be required in the future and provision should be made for this.

Since the grid is rectangular and bounded (…yes Mars is a strange planet), a robot that moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that prohibits future robots from dropping off the world at the same grid point. The scent is left at the last grid position the robot occupied before disappearing over the edge. An instruction to move “off” the world from a grid point from which a robot has been previously lost is simply ignored by the current robot.


####The Input 

The first line of input is the upper-right coordinates of the rectangular world, the lower-left coordinates are assumed to be 0, 0.

The remaining input consists of a sequence of robot positions and instructions (two lines per robot). A position consists of two integers specifying the initial coordinates of the robot and an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a string of the letters “L”, “R”, and “F” on one line.

Each robot is processed sequentially, i.e., finishes executing the robot instructions before the next robot begins execution.

The maximum value for any coordinate is 50.

All instruction strings will be less than 100 characters in length.


####The Output 

For each robot position/instruction in the input, the output should indicate the final grid position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST” should be printed after the position and orientation.

####Sample Input
```
5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL
```

####Sample Output
```
1 1 E
3 3 N LOST
2 3 S
```
