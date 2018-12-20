package com.dogspot.web.member;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Question;

@WebServlet("/member/qna/listedit")
public class EditListController extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
		String sql = "SELECT TITLE, CONTENT, ID FROM QUESTION WHERE ID = ?";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
		try {
			int id = Integer.parseInt(req.getParameter("id"));
			System.out.println(id);
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, id);
			
			ResultSet rs = st.executeQuery();
			List<Question> list = new ArrayList<>();
			while(rs.next()) {
				Question q = new Question(
						rs.getString("title"),
						rs.getString("content"),
						rs.getInt("id")
						);
				list.add(q);
			}
			
			RequestDispatcher dispatcher = 
					req.getRequestDispatcher("/WEB-INF/views/member/qna/edit.jsp");
			req.setAttribute("list", list);
			dispatcher.forward(req, resp);
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("³ª µé¾î¿È!!!!");
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
		String sql = "UPDATE QUESTION SET TITLE=?, CONTENT=? WHERE ID=?";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
		
		try {
			String title=  req.getParameter("title");
			String content = req.getParameter("content");
			int id = Integer.parseInt(req.getParameter("id"));
			System.out.println("title: "+ title +"/" + "content: " + content +"/" + "id: " + id);
					
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, title);
			st.setString(2, content);
			st.setInt(3, id);
			
			int rs = st.executeUpdate();
			List<Question> list = new ArrayList<>();
		
			/*RequestDispatcher dispatcher = 
			req.getRequestDispatcher("/WEB-INF/views/member/qna/list.jsp");
			req.setAttribute("list", list);
			dispatcher.forward(req, resp);
		*/
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		resp.sendRedirect("/list");
	}
	


}
