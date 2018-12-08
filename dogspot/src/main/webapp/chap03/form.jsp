<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>welecome home!</h1>
	getRemoteAddr:<%=request.getRemoteAddr()%><br>
	getContentLength:<%=request.getContentLength()%><br>
	getCharacterEncoding:<%=request.getCharacterEncoding()%><br>
	getContentType:<%=request.getContentType()%><br>
	getProtocol:<%=request.getProtocol()%><br>
	getMethod:<%=request.getMethod()%><br>
	getRequestURI:<%=request.getRequestURI()%><br>
	getContextPath:<%=request.getContextPath()%><br>
	getServerName:<%=request.getServerName()%><br>
	getServerPort:<%=request.getServerPort()%><br>
	<br>
	
	<form action="viewParameter.jsp" method="post">
		이름: <input type="text" name="name" size="10"><br>
		주소: <input type="text" name="address" size="30"><br>
		좋아하는 동물: 
		<input type="checkbox" name="pet" value="dog">강아지
		<input type="checkbox" name="pet" value="cat">고양이
		<input type="checkbox" name="pet" value="pig">돼지
		<br>
		<input type="submit" value="전송">
	</form>
</body>
</html>