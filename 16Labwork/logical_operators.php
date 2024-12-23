<?php
$x = 10;
$y = 20;

if ($x < $y && $x > 5) {
    echo "x is less than y and greater than 5.<br>";
}

if ($x > 5 || $y < 15) {
    echo "Either x is greater than 5 or y is less than 15.<br>";
}

if (!($x == $y)) {
    echo "x is not equal to y.<br>";
}
?>
