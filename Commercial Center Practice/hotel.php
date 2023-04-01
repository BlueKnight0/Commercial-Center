<?php
//$array = array('car','Apple',);
//echo$x; 
//echo is a command to print 
//The $ is used to declare variables
//To print arrays we use print_r
//To use tags in php we have to use 'tag'
// echo '<pre>';
// Text or comamand 
// echo '</pre>';
//Constants: define('pi',3.1416);


//Things required to make connection
/*
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'gilbert';

$con = mysqli_connect($host,$username,$password,$database);
if($con){
    echo "Connection Succesfull";
}else{
    echo "Connection Failed":
}
*/
//You can skip the declaration of variables and the conditional if in one line
$con = mysqli_connect('localhost5','root','','gilbert') or die('Connection Failed');

$sql = "SELECT * FROM record";

$result = mysqli_query($con,$sql);

if($result)



?> 