# Ruby MBTA Problem

## Basic Version

There are 3 subway lines:

```ruby
red_line = %w(South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, Alewife)

green_line = %w(Government Center, Park Street, Boylston, Arlington, Copley, Hynes, Kenmore)

orange_line = %w(North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills)
```

All intersect at Park Street, but there are no other intersection points. Some of this MBTA data is fictionalized

- Create a method or class to calculate the total number of stops between stations on the "MBTA"
  - It should take two arguments, the starting station and the ending station
  - It should return an informative statement like `there are 4 stops from station x to station y.` inlucde  `You must transfer at Park Street` if the customer must transfer
- Write additional methods or classes


## Bonus Version - Get Experience with rspec and TDD/testing

Clone this and run it with tests: https://github.com/ga-wdi-boston/ruby-objects-practice


## Hints


- Assume good input. Your function need not check the validity of the line or stop name.
- Think about where to store initialization data.
- Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
- The key to the practice is to find the intersection of the lines at Park Street.
- Solve an easier problem first.

## Bonus Bonus 

- Think about adding Haymarket before Government Center on the Green line then try to find a solution when there are multiple intersections. Is there a way to decide if a particular solution is "correct"?

- This bonus is completely optional and does not have tests, yet.
