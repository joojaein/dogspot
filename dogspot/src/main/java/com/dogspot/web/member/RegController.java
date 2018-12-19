package com.dogspot.web.member;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/member/qna/reg")
public class RegController extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		RequestDispatcher dispatcher = 
		req.getRequestDispatcher("/WEB-INF/views/member/qna/reg.jsp");
		dispatcher.forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setCharacterEncoding("UTF-8"); // stream (out)에 담는 방식이 utf-8
		resp.setContentType("text/html; charset=UTF-8"); // 나지금 html문서 utf-8로 보낸다! 브라우저야 잘인식해줘~하는(브라우저에 보내는 방식을 utf-8)
		
		req.setCharacterEncoding("UTF-8");
		
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		
		System.out.println(title);
		System.out.println(content);
		

	    String sql = "INSERT INTO QUESTION(ID,TITLE, CONTENT,REGID) "
	            + "VALUES (QUESTION_SEQ.NEXTVAL,?,?,?)";
	    
	    try {
	    	String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
			
			con.setAutoCommit(false);
			
			 PreparedStatement st = con.prepareStatement(sql);
			 st.setString(1, title);
	         st.setString(2, content);
	         st.setString(3, "haejeong1005");
	       
	        	        
	         int affected=st.executeUpdate();
	         
	         con.commit();
	        
	         st.close();
	       
	         con.close();
	         
	         }
	         catch (SQLException e) {
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	      } catch (ClassNotFoundException e) {
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	      }
	    
	    resp.sendRedirect("list");
		
	}
}
