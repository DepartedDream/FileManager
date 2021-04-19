<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="FileManager.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>文件浏览器</title>
    <script src="JS/jquery-3.6.0.min.js"></script>
    <link href="CSS/MainCss.css" rel="stylesheet" />
    <script src="JS/MainJs.js"></script>
</head>
<body>
    <video id="background" loop="loop" muted="muted" autoplay="autoplay" src="Resource/background.mp4"></video>
    <div id="current_path_contain" runat="server">
        <div id="backward_btn"></div>
        <div id="current_path" runat="server"></div>
    </div>
     <div id="jump_path_contain" runat="server">
        <div id="jump_path_textbox"  contenteditable="true"></div>
        <div id="forward_btn"></div>
    </div>
    <div id="create_file_contain" runat="server">
        <div id="create_path_textbox" contenteditable="true"></div>
        <div id="create_file_btn"></div>
        <div id="create_dir_btn"></div>
    </div>
    <div id="copy_file" runat="server"></div>
    <div id="file_list" runat="server"></div>
    <div id="file_content_contain">
        <div id="file_content" runat="server" contenteditable="true" spellcheck="false"></div>
        <div id="save_file_btn"></div>
    </div>
</body>
</html>