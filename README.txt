A few changes were made to the scifi shooter:
 1) Enemy code refactored into separate file
 2) Enemies now cause the ship to be destroyed on collsion
 3) Rocks were added such that when the player collides with them, they are destroyed

 These changes were made simply by following the outline of the 
 ship.js file and implementation in the start function. The details
 of overlap turned out to be quite interesting. For a collision between 
 the rocks and ship to be detected a whole new call to collide needed to be made.
 Seems like this could be tedious if there were a lot of collision objects, I suppose
 the groups could be edited though to make this operate more fluidly.