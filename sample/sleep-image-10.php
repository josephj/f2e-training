<?php
$img = "dog.jpg";
$imagedata = fread(fopen($img,"r"), filesize($img));
header("Content-type: image/jpg");
sleep(10);
echo $imagedata;
?>
