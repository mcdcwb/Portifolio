<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") { 
        $nome = htmlspecialchars($_POST['nome']); 
        $email = htmlspecialchars($_POST['email']); 
        $telefone = htmlspecialchars($_POST['telefone']); 
        $assunto = htmlspecialchars($_POST['assunto']); 
        $mensagem = htmlspecialchars($_POST['mensagem']); 
        $to = "machadoluaan@gmail.com"; 
        $subject = "Mensagem de $nome: $assunto"; 
        $body = "Nome: $nome\nE-mail: 
        $email\nTelefone: $telefone\nAssunto: 
        $assunto\n\nMensagem:\n$mensagem"; 
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) { 
            echo "Mensagem enviada com sucesso!";
        } else { echo "Falha ao enviar a mensagem."; } 
        } else { echo "Método de envio inválido.";
    }
?>