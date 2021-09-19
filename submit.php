<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php // quick and dirty form submission handler
$dt=date("Y/m/d H:i:s");
if (!empty($_SERVER['HTTP_CLIENT_IP']))
{
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} 
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
}
else
{
    $ip = $_SERVER['REMOTE_ADDR'];
}

if (!empty($_POST['message'])): // скачал петон
	$str = '['.$dt.' '.$ip.'] New form submission:'.PHP_EOL;
	$str = $str.'Form >> First name: '.$_POST['firstname'].PHP_EOL;
	$str = $str.'Form >> Last name: '.$_POST['lastname'].PHP_EOL;
	$str = $str.'Form >> E-mail: '.$_POST['email'].PHP_EOL;
	$str = $str.'Form >> Company: '.$_POST['company'].PHP_EOL;
	$str = $str.'Form >> City: '.$_POST['city'].PHP_EOL;
	$str = $str.'Form >> Message: '.$_POST['message'].PHP_EOL;

	file_put_contents('log.txt', $str, FILE_APPEND);
	print "[INFO] POST Request data saved!<br>".PHP_EOL."Timestamp: ".$dt."<br>".PHP_EOL."Input details: ".$input."<br>";
else:
	print "[INFO] Invalid data POST request!";
endif;
?>
