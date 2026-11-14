<?php
//credenciais
$servidor = "localhost";
$usuario = "root";
$senha "";
$banco = "sobrepatas"

//conectando
$conn = mysqli_connect($servidor, $usuario, $senha, $banco);

//verificando conexao
if($conexao->connect_error){
die("Conexão falhou: ". $conexao->connect_error);
} echo "Conexão realizada com sucesso!";


?>
