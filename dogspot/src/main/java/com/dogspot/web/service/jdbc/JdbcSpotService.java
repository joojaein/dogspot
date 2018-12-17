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
import com.dogspot.web.entity.Favorite;
import com.dogspot.web.entity.Good;
import com.dogspot.web.entity.Recent;
import com.dogspot.web.entity.Review;
import com.dogspot.web.entity.Spot;
import com.dogspot.web.entity.SpotImg;
import com.dogspot.web.entity.SpotRequest;
import com.dogspot.web.entity.Theme;
import com.dogspot.web.service.SpotService;

public class JdbcSpotService implements SpotService {

	@Override
	public List<Spot> getList() {

		/*List<Spot> list = new ArrayList<>();

		String sql = "SELECT * FROM SPOT";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 

		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##sist","dclass");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql); 			
			
			while(rs.next()) {	
				Spot spot = new Spot(
						rs.getInt("ID"),
						rs.getString("NAME"),
						rs.getString("ADDR"),
						rs.getString("PHONE"),
						rs.getString("TIME"),
						rs.getString("TIME_ETC"),
						rs.getString("DOGSIZE"),
						rs.getString("DOGSIZE_ETC"),
						rs.getString("DOGWEIGHT"),
						rs.getString("DOGWEIGHT_ETC"),
						rs.getString("PRICE_MIN"),
						rs.getString("PRICE_MAX"),
						rs.getString("PRICE_ETC"),
						rs.getString("URL"),
						rs.getString("ETC"),
						rs.getDate("REGDATE"),
						rs.getInt("THEMEID"),
						rs.getString("THEME_ETC"));
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
		
		return list;*/
		
		return null;
	}

	@Override
	public List<Spot> getList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Spot> getList(String query) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Spot> getList(int page, String query) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SpotImg getSpotImg(int spotId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Spot getSpot(int spotId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Review> getReviewList(int spotId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SpotImg> getSpotImgList(int spotId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertRecent(int spotId, String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSpotRequest(SpotRequest spotRequest, String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Good> getGoodList(String reviewId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cmt> getCmtList(String cmtId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int getHit(int reviewId) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
	@Override
	public Favorite getFavoriteList(int spotId, String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int setFavorite(int spotId, String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Spot spot) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSpotImgList(List<SpotImg> spotImgList) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Theme> getTheme() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insertTheme(Theme theme) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(int spotId, Spot spot) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int spotId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Recent> getRecentList(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recent> getRecentList(String memberId, int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Favorite> getFavoriteList() {
		/*List<Favorite> list = new ArrayList<>();

		String sql = "SELECT * FROM FAVORITE";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 

		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql); 			
			//private String memberId;
			//private int spotId;
			while(rs.next()) {	
				Favorite favorite = new Favorite(
						rs.getString("MEMBERID"),
						rs.getInt("SPOTID"));
				list.add(favorite);
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
		
		return list;*/

		return null;
	}

	
	
	@Override
	public List<Favorite> getFavoriteList(String memberId, int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SpotRequest> getSpotRequestList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SpotRequest> getSpotRequestList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public SpotRequest getSpotRequest(String memberId, int spotId) {
		// TODO Auto-generated method stub
		return null;
	}

}
