<%@page import="java.util.Enumeration"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8");
	%>
	
	<%
	String name = request.getParameter("name");
	%>
	<%= name %>
	<br>
	
	<%
	String[] pets = request.getParameterValues("pet");
	for(String pet : pets){
	%>
	<%= pet %>
	<%} %>
	<br>
	
	<% 
	Enumeration<String> names = request.getParameterNames();
	while(names.hasMoreElements()){
	%>
		name : <%= names.nextElement() %>
	<%
	}
	%>
</body>
</html>