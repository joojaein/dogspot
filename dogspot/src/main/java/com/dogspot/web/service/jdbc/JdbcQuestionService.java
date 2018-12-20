package com.dogspot.web.service.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.dogspot.web.entity.Question;
import com.dogspot.web.service.QuestionService;

public class JdbcQuestionService implements QuestionService {

	@Override
	public int insert(Question question) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateQuestion(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateAnswer(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteQuestion(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteAnswer(int questionId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Question> getList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Question> getList(int page) {
		// TODO Auto-generated method stub
		List<Question> list = new ArrayList<>();
		
		String sql = "SELECT * FROM (SELECT ROWNUM NUM, N.* FROM(SELECT * FROM QUESTION ORDER BY REGDATE DESC)N)WHERE NUM BETWEEN ? AND ?";

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
//			
			while(rs.next()) {
				Question q = new Question(
						rs.getInt("id"),
						rs.getString("title"), 
						rs.getString("regid"),
						rs.getDate("regdate"),
						rs.getString("content")

						);
			
				list.add(q);
//				
			}

			 rs.close();
	         st.close();
	         con.close();
    
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   return list;
        
	}

	@Override
	public List<Question> getList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Question getQuestion(int questionId) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public int delQue(String qid) {
		// TODO Auto-generated method stub
		
		String sql = "DELETE FROM QUESTION WHERE ID=?";
		
		int que = 0;
		
		try {
			String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
			

			
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, qid);
			
			 //int affected = 
			
			que = st.executeUpdate();
			
			
			st.close();
			con.close();
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return que;
	}

}
