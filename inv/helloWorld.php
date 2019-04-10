<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php

function conCat() {
	$sVar = "Hello World!";
	$nVar = 5;
	$nVar2 = 10;
	$bVar = false;
	$aVar = array("val0", "val1");

	var_dump($sVar);
	var_dump($nVar);
	var_dump($nVar2);
	var_dump($bVar);
	var_dump($aVar);
	
	echo "<p>String concat $sVar </p>";
	echo "<p>String concat $sVar & " . $sVar . " </p>";
	echo "<p> Num concat $nVar ,  $nVar2 &  </p>";
	echo "<p>String concat "  . $nVar . " </p>";
	echo $nAns = $nVar + $nVar2;
	var_dump($nAns);
	echo  "<p>" . $nVar . " + " . $nVar2 . " = $nAns </p>";
	echo "<p>" . $bVar . "</p>";
	echo "<p>" . $aVar . "</p>";
}



function staTest() {
	static $sN = 0;
	var_dump($sN);
	echo "<p>" . $sN . "</p>";
	$sN++;

}




/*conCat();

staTest();
staTest();
staTest();*/

class objTest {
	function objTest () {
		$this->what = "I am Object";
	}
}

$object = new objTest();

echo $object->what;

for ($i = 0; $i < 11; $i = $i + 100) {
    echo $i;
}

function hello() {
  echo 'Hello, World!';
}

$current_user = 'Jeremy';

function is_mike() {
  global $current_user;
  $current_user = 'Mike';
  if($current_user == 'Mike') {
    echo 'It is Mike!';
  }
  else {
    echo 'Nope, it is not Mike.';
  }
}

is_mike();

?> 

</body>
</html>