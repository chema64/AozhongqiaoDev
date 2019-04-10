<?php
echo $_POST['date'];
echo $_POST['email'];
echo $_POST['desc'];
?>


<form class="" action="index.php" method="post">

	<label for="date">Date of Signting</label></br>
	<input type="text" name="date" value="">
	<hr>

	<label for="email">Your Email</label></br>
	<input type="text" name="email" value="">
	<hr>

	<label for="desc">Describe the Sighting</label></br>
	<textarea name="desc" rows="8" cols="40"></textarea>
	</br>

	<input type="submit" name="submit">
	
</form>