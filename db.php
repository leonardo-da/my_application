<?php
    $CN = mysqli_connect("localhost","root","root");
    $DB = mysqli_select_db($CN,"nombrebasededatos");

    $email = $_POST['email'];
    $password = $_POST['pass'];

    $IQ = "instert into register(Email,Password) values ('$email','$pasword')";

    $R = mysqli_query($CN,$IQ);

    if($R){
        $Message = "Register successfully";
    }else{
        $Message = "Error";
    }
    echo($Message); 
    echo("charmin")
?>