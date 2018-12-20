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

@WebServlet("/member/qna/listedit")
public class EditListController extends HttpServlet{
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
				//System.out.println("comin");
				resp.setCharacterEncoding("UTF-8");
				resp.setContentType("text/html; charset=UTF-8");
				int id = Integer.parseInt(req.getParameter("id"));
				System.out.println(id);
				String sql = "SELECT TITLE,CONTENT FROM QUESTION WHERE ID = ?";
				
				String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
				try {
					Class.forName("oracle.jdbc.driver.OracleDriver");
					Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
					PreparedStatement st = con.prepareStatement(sql);
					st.setInt(1, id);

					System.out.println("gggggggggggggg");
					RequestDispatcher dispatcher = 
					req.getRequestDispatcher("/WEB-INF/views/member/qna/edit.jsp");
					dispatcher.forward(req, resp);
				} catch (ClassNotFoundException e) {
					// TODO Auto-generated catch block
					System.out.println("catch1");
					e.printStackTrace();
				} catch (SQLException e) {
					System.out.println("catch2");
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}


}
