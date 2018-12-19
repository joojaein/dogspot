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

@WebServlet("/member/qna/list")
public class ListController extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		/*RequestDispatcher dispatcher = 
		req.getRequestDispatcher("/WEB-INF/views/member/qna/list.jsp");
		dispatcher.forward(req, resp);*/
//				
				
		String page_ = req.getParameter("p");
		
		int page = 1;
		if(page_!=null&&!page_.equals(""))
			page=Integer.parseInt(page_);
		
		String sql = "SELECT * FROM (SELECT ROWNUM NUM, N.* FROM(SELECT * FROM QUESTION ORDER BY REGDATE DESC)N)WHERE NUM BETWEEN ? AND ?";
		//String sql = "SELECT * FROM QUESTION";
		try {
			
			int start = 10*(page-1)+1;
			int end = page*10;
			
			String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, start);
			st.setInt(2, end);
			//ResultSet rs = st.executeQuery(sql);
			ResultSet rs = st.executeQuery();
//			
			List<Question> list = new ArrayList<>();
//			
			while(rs.next()) {
				Question q = new Question(
						//rs.getInt("id"),
						rs.getString("title"), 
						rs.getString("regid"),
						rs.getDate("regdate"),
						rs.getString("content")
						//rs.getString("regid")
						//rs.getString("ans_title"),
						//rs.getDate("ans_regdate"),
						//rs.getString("ans_regid")
						
						);
//				//n.setId(rs.getString("id"));
//				q.setTitle(rs.getString("title"));
//				
				list.add(q);
//				
			}
//			
//			rs.next();
			rs.close();
			st.close();
			con.close();
//			
			RequestDispatcher dispatcher = 
			req.getRequestDispatcher("/WEB-INF/views/member/qna/list.jsp");
			req.setAttribute("list", list);
			dispatcher.forward(req, resp);
	
			
			rs.next(); 
//		
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
