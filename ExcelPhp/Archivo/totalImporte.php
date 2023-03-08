<body>
<div class="container">
    <h2>Ejemplo: Leer Archivos Excel con PHP</h2>   
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Resultados de archivo de Excel.</h3>
      </div>
      <div class="panel-body">
        <div class="col-lg-12">
            
            <?php
                require_once 'PHPExcel/Classes/PHPExcel.php';
                $archivo = "LIMITCREDIT_009_20230301.xlsx";
                $inputFileType = PHPExcel_IOFactory::identify($archivo);
                $objReader = PHPExcel_IOFactory::createReader($inputFileType);
                $objPHPExcel = $objReader->load($archivo);
                $sheet = $objPHPExcel->getSheet(0); 
                $highestRow = $sheet->getHighestRow(); 
                $highestColumn = $sheet->getHighestColumn();
                
                $totalImporte=0;
                for($i=2; $i<=$highestRow; $i++){
                    $totalImporte=$totalImporte+$sheet->getCell("F".$i)->getValue();
                }
            ?>

            <h3>Importe total: <?php echo $totalImporte; ?></h3>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>No.</th>
                <th>Cuenta Origen</th>
                <th>Usuario Destinado</th>
                <th>Tarjeta Destino</th>
                <th>Estatus Tarjeta</th>
                <th>Importe</th>
                <th>Concepto</th>
                <th>Estatus Operacion</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $num=0;
            for ($row = 2; $row <= $highestRow; $row++){ $num++;?>
                <tr>
                    <td><?php echo $sheet->getCell("A".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("B".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("C".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("D".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("E".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("F".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("G".$row)->getValue();?></td>
                    <td><?php echo $sheet->getCell("H".$row)->getValue();?></td>
                </tr>
            <?php
            }
            ?>
        </tbody>
    </table>

  </div>  
 </div>   
</div>
</body>