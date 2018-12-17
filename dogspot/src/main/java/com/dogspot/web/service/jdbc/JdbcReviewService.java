package com.dogspot.web.service.jdbc;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.entity.CmtComplain;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Member;
import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.ReviewComplain;
import com.dogspot.web.entity.ReviewImg;
import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.ReviewService;

public class JdbcReviewService implements ReviewService {

	@Override
	public List<Review> getList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Review> getList(String query) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Review getReview(int reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ReviewImg> getReviewImgList(int reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ReviewImg getReviewImg(int reviewId, int index) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ReviewImg getReviewImg(int reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Review review) {
		String sql = "insert into REVIEW (TITLE, CONTENT, REGID, SPOTID, HASHTAG) values (?,?,?,?,?)";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 
		
		int complete = 0;
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
			PreparedStatement st = con.prepareStatement(sql);
				
			st.setString(1, review.getTitle());
			st.setString(2, review.getContent());
			st.setString(3, review.getRegId());
			st.setInt(4, review.getSpotId());
			st.setString(5, review.getHashTag());
			
			complete = st.executeUpdate();
			
			st.close();
			con.close();	
		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	
		return complete;
	}

	@Override
	public List<Spot> getSpotList(String query) {
		List<Spot> list = new ArrayList();
		String sql = "SELECT * FROM SPOT WHERE NAME LIKE '%"+query+"%'";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql); 
			
			while(rs.next()) {	
				Spot spot = new Spot(
						rs.getInt("ID"),
						rs.getString("NAME"),
						rs.getString("ADDR"));
				list.add(spot);
			}	
			rs.close();
			st.close();
			con.close();	
		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	
		return list;
	}

	@Override
	public int insertReviewImgList(List<ReviewImg> reviewImgList) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(int reviewId, Review review) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int reviewId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Review> getMyList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Review> getMyList(String memberId, int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Good> getGoodList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Good> getGoodList(String memberId, int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int setGood(int reviewId, String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Cmt> getCmtList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cmt> getCmtList(String memberId, int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertCmt(Cmt cmt) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateCmt(int cmtId, Cmt cmt) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertHit(int reviewId, String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int getHit(int reviewId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertReviewComplain(ReviewComplain reviewComplain) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertCmtComplain(CmtComplain cmtComplain) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<ReviewComplain> getReviewComplainList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ReviewComplain> getReviewComplainList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ReviewComplain getReviewComplain(String memberId, int reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CmtComplain> getCmtComplainList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CmtComplain> getCmtComplainList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CmtComplain getCmtComplain(String memberId, int cmtId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member getMemberReviewWriter(int reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member getMemberCmtWriter(int cmtId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertWarningToReview(int reviewId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertWarningToCmt(int cmtId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertWarningToMember(Member member) {
		// TODO Auto-generated method stub
		return 0;
	}}
