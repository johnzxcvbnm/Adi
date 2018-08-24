<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Hello!</h1>
        <pre>
        <?php
            // single line comment
            /*
                mutli
                line
                comment
            */
            // $my_first_var;
            // $my_first_var = 2;
            // $my_first_var = 3;
            // echo $my_first_var;

            // $x = "my string";
            // var_dump($x);
            // $x = 5985;
            // var_dump($x);
            // $x = 10.365;
            // var_dump($x);
            // $x = true;
            // var_dump($x);
            // $x = array("Volvo", "BMW", "Toyota");
            // var_dump($x);
            // $x = null;
            // var_dump($x);

            // $first_part = "first part";
            // $second_part = "second part";
            // $concatenation = $first_part . " " . $second_part;
            // $concatenation .= ".  Appended value";
            // echo $concatenation;

            // echo 1 + 1;
            // echo 2 - 1;
            // echo 3 * 2;
            // echo 12 / 3;
            // echo 5 % 2;
            // echo 2 ** 3;
            //
            // $x = 1;
            // $x++;
            // echo $x;
            // $x--;
            // echo $x;
            //
            // $my_var = 1;
            // $my_var += 2;
            // echo $my_var;
            // $my_var -= 2;
            // echo $my_var;
            // $my_var *= 2;
            // echo $my_var;
            // $my_var /= 2;
            // echo $my_var;
            // if(1 > 2){
            //     echo "huh?";
            // } else if (1 == 2){
            //     echo "zuh?";
            // } else {
            //     echo "this makes sense";
            // }
        ?>
        </pre>

        <!-- <div>
            <?php if(1 > 2 && 1 == 1): ?>
                this doesn't work
            <?php elseif( 1 !== '1'): ?>
                this doesn't work either
            <?php else: ?>
                this works
            <?php endif; ?>
        </div> -->
        <!-- <?php
        $cars = array("Volvo", "BMW", "Toyota");
        $cars[4] = "asdf";
        $cars[] = "added to the end";
        echo "I like " . $cars[0] . ", " . $cars[4] . " and " . $cars[5] . "!";
        ?>
        <br/>
        <?php
        echo count($cars)
        ?>
        <br/>
        <pre>
            <?php
            print_r($cars);
            ?>
        </pre> -->

        <!-- <?php
            $age = array("Peter" => 35, "Ben" => 37, "Joe" => "43");
            $age["Bob"] = 105;
            echo "Bob is " . $age['Bob'] . " years old.";
        ?> -->


        <!-- <?php
            $x = 1;
            while($x <=5 ){
                echo "The number is: $x <br/>";
                $x++;
            }
        ?>
        <?php $x = 1; ?>
        <ul>
            <?php while($x <= 5): ?>
                <li><?= $x; ?></li>
                <?php $x++; ?>
            <?php endwhile; ?>
        </ul> -->




        <!-- <?php
            for($x = 0; $x <= 10; $x++){
                echo "The number is $x <br/>";
            }
        ?>

        <ul>
            <?php for($x = 0; $x <= 10; $x++): ?>
                <li>The number is: <?= $x; ?></li>
            <?php endfor; ?>
        </ul> -->

        <!-- <?php
            $colors = array("red", "green", "blue", "yellow");
            foreach($colors as $index => $value){
                echo $index . ": $value <br/>";
            }
        ?>

        <?php
            $ages = array("Peter" => 35, "Ben" => 37, "Joe" => 43);
            foreach($ages as $key => $value){
                echo $key . ": $value <br/>";
            }
        ?> -->


        <!-- <?php
            function writeMsg() {
                echo "Hello world";
            }
            writeMsg();
        ?> -->

        <?php
            // echo strlen("Hello world!");
            // echo "<br/>";
            // echo str_word_count("Hello world!");
            // echo "<br/>";
            // echo strrev("Hello world");
            // echo "<br/>";
            // echo strpos("Hello world world!", "world");
            // echo "<br/>";
            // echo strrpos("Hello world world!", "world");
            // echo "<br/>";
            // echo str_replace("world", "Dolly", "Hello world!");
            // echo "<br/>";
            // echo substr("Hello world", 3);
            // echo "<br/>";
            // echo substr("Hello world", 3, 4);
            // echo "<br/>";
            // $the_string = "Some sentence goes here";
            // $string_array = explode(" ", $the_string);
            // print_r($string_array);
        ?>

        <?php
            // $cars = array("Volvo", "BMW", "Toyota");
            // // sort($cars);
            // rsort($cars);
            // // print_r($cars);
            // echo "<br/>";
            // $ages = array("Peter" => 35, "Ben" => 37, "Joe" => 43);
            // // asort($ages);
            // // arsort($ages);
            // // ksort($ages);
            // krsort($ages);
            // print_r($ages);
        ?>

        <?php
            class Car {
                static public $car_types = array("Pickup", "Minivan", "Sport");
                protected $wheels;
                public function __construct($num_wheels){
                    $this->wheels = $num_wheels;
                }
                public function getWheels(){
                    return $this->wheels;
                }

                private $engine_on = false;
                public function start(){
                    $this->engine_on = true;
                }
            }

            class Humvee extends Car {
                protected $armour = 10;
                public function takeDamage($damage){
                    $this->armour -= $damage;
                }
                public function loseWheel(){
                    $this->wheels--;
                }
                public function start(){
                    parent::start();
                    echo "Welcome to the jungle!";
                }
            }

            $my_humvee = new Humvee(6);
            print_r($my_humvee);
            echo "<br/>";
            $my_humvee->loseWheel();
            print_r($my_humvee);
            echo "<br/>";
            $my_humvee->takeDamage(6);
            print_r($my_humvee);
            echo "<br/>";
            $my_humvee->start();
            print_r($my_humvee);
            // $my_car = new Car(4);
            // echo $my_car->getWheels();

            // print_r($my_car);
            // $my_car->wheels = 3;
            // echo $my_car->wheels;
            // echo "<br/>";
            // print_r($my_car);
            echo "<br/>";
            print_r(Car::$car_types);
        ?>
    </body>
</html>
