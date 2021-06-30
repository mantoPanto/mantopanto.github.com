<script>
	var x = 1;
	function add_a_row(){
		if(x>=1){
			var row = $("<tr id='appndd_tr'><td><input type='text'  name='k2_no' placeholder='No. Borang K2' required></td><td><input type='text'  name='k2_export' placeholder='Kuantiti Dieksport (kg)' required></td><td><input type='text'  name='k2_used' placeholder='Bahan Mentah Digunakan (kg)' required></td><td><input type='button' onclick='remove_row()' class='btn btn-wide btn-danger' value='Remove'/></td></tr>");
		 row.append().prependTo("#appnd_row_table");
		 x++;
		}
	}
    function remove_row(){
		$('#appndd_tr').remove();
		x = 1;
	}
    function add_a_row_1(){
		if(x>=1){
			var row = $("<tr id='appndd_tr'><td><input type='text' style='width: 300px;' name='import_quantity_used' placeholder='Kuantiti Dibuat (kg) ' required></td><td><input  style='width: 300px;' type='text'  name='import_percentage' placeholder='Peratusan Bahan Mentah Digunakan ' required></td><td><input  type='button' onclick='remove_row_1()' class='btn btn-wide btn-danger' value='Remove'/></td></tr>");
		 row.append().prependTo("#appnd_row_table_1");
		 x++;
		}
	}
    function remove_row_1(){
		$('#appndd_tr').remove();
		x = 1;
	}
    function add_a_row_2(){
		if(x>=1){
			var row = $("<tr id='appndd_tr'><td><input type='text' style='width: 200px;' name='k1_no' placeholder='No. Borang K1 ' required></td><td><input  style='width: 200px;' type='text'  name='import_date' placeholder='Tarikh Import ' required></td><td><input  style='width: 200px;' type='text'  name='import_quantity' placeholder='Kuantiti Diimport (kg) ' required></td><td><input  style='width: 200px;' type='text'  name='import_duti_paid' placeholder='Amaun Duti Dibayar (RM)' required></td><td><input  type='button' onclick='remove_row_2()' class='btn btn-wide btn-danger' value='Remove'/></td></tr>");
		 row.append().prependTo("#appnd_row_table_2");
		 x++;
		}
	}
    function remove_row_2(){
		$('#appndd_tr').remove();
		x = 1;
	}
    function add_a_row_3(){
		if(x>=1){
			var row = $("<tr id='appndd_tr'><td><input type='text' style='width: 200px;' name='k1_no' placeholder='No. Borang K1 ' required></td><td><input  style='width: 200px;' type='text'  name='import_date' placeholder='Tarikh Import ' required></td><td><input  style='width: 200px;' type='text'  name='import_quantity' placeholder='Kuantiti Diimport (kg) ' required></td><td><input  style='width: 200px;' type='text'  name='import_duti_paid' placeholder='Amaun Duti Dibayar (RM)' required></td><td><input  type='button' onclick='remove_row_2()' class='btn btn-wide btn-danger' value='Remove'/></td></tr>");
		 row.append().prependTo("#appnd_row_table_3");
		 x++;
		}
	}
    function remove_row_3(){
		$('#appndd_tr').remove();
		x = 1;
	}
    function add_a_row_4(){
		if(x>=1){
			var row = $("<tr id='appndd_tr'><td><input type='text' style='width: 200px;' name='k1_no' placeholder='No. Borang K1 ' required></td><td><input  style='width: 200px;' type='text'  name='import_date' placeholder='Tarikh Import ' required></td><td><input  style='width: 200px;' type='text'  name='import_quantity' placeholder='Kuantiti Diimport (kg) ' required></td><td><input  style='width: 200px;' type='text'  name='import_duti_paid' placeholder='Amaun Duti Dibayar (RM)' required></td><td><input  type='button' onclick='remove_row_2()' class='btn btn-wide btn-danger' value='Remove'/></td></tr>");
		 row.append().prependTo("#appnd_row_table_4");
		 x++;
		}
	}
    function remove_row_4(){
		$('#appndd_tr').remove();
		x = 1;
	}
</script>
