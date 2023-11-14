<?php
    require_once('conndb.php');
    $conn= conn();
    if($conn!=false){
        $spmoi = $_POST['spmoi'];
        $sql= "SELECT masp_moi FROM spmoi where masp_moi='$spmoi'";
        $kq= $conn->query($sql);
        if($kq->num_rows!=0){
            echo json_encode(
                array(
                  "error"=>"exist"
                )
              );
        }else{
            echo json_encode(
                array(
                  "action"=>"no_exist"
                )
              );
        }
    }

?>