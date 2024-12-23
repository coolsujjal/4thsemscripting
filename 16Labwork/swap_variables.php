<?php
$a = 5;
$b = 10;

echo "Before swapping: a = $a, b = $b<br>";

$a = $a + $b; // a becomes 15
$b = $a - $b; // b becomes 5
$a = $a - $b; // a becomes 10

echo "After swapping: a = $a, b = $b";
?>
