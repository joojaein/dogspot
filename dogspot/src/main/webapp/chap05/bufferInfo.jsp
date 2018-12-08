<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" buffer="16kb" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
hello1<br/>
<%
int size = out.getBufferSize();
int remain = out.getRemaining();
%>
buffer size : <%= size %><br/>
buffer reamain1 : <%= remain %><br/>

<% out.flush();%>

buffer reamain2 : <%= remain %><br/>

hello2<br/>
hello3<br/>
<% out.clearBuffer();%>

hello4<br/>
hello5<br/>
<% out.flush();%>

</body>
</html>