<?php
$dir=$_GET["dir"];
$arr=scandir($dir);
echo implode("#",$arr);
?>