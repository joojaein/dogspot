<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>welecome home!</h1>
	getRemoteAddr:<%=request.getRemoteAddr()%>
	getContentLength:<%=request.getContentLength()%>
	getCharacterEncoding:<%=request.getCharacterEncoding()%>
	getContentType:<%=request.getContentType()%>
	getProtocol:<%=request.getProtocol()%>
	getMethod:<%=request.getMethod()%>
	getRequestURI:<%=request.getRequestURI()%>
	getContextPath:<%=request.getContextPath()%>
	getServerName:<%=request.getServerName()%>
	getServerPort:<%=request.getServerPort()%>
	
	<form action="viewParameter.jsp" method="post">
		이름:<input type="text" name="name" size="10"><br>
		주소:<input type="text" name="address" size="30"><br>
		좋아하는 동물:
		<input type="checkbox" name="pet" value="dog">
		<input type="checkbox" name="pet" value="cat">
		<input type="checkbox" name="pet" value="pig">
		<br>
		<input type="submit" value="전송">

	</form>
</body>
</html>