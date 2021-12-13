<?php
    
    
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $bloodgroup = $_POST['bloodgroup'];
    $phone = $_POST['phone'];
    //database connection
    $conn = new mysqli( 'localhost','root','','bloodstorage');


    if($conn->connect_error){
        die('connection failed :' .$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into bloodstorage(name,age,gender,bloodgroup,phone ) values (?,?,?,?,?)");
        $stmt->bind_param("sissi",$name,$age, $gender,$bloodgroup, $phone);
        $stmt->execute();
        echo "registeration successfully";
        $stmt->close();
        $conn->close();
    }
?>

