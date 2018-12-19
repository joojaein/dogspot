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
	public List<Spot> getList(int page) {
		// TODO Auto-generated method stub
		List<Spot> list = new ArrayList<>();

	      //String sql = "SELECT * FROM (SELECT ROWNUM num,SPOT.* FROM SPOT) WHERE num BETWEEN ? and ?";
		  String sql = "select * from spot";
	      String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 
	      
	      try {
	    	 int start = 1+(page-1)*5; // 등차수열 일반항
	         int end = page*5;
	         Class.forName("oracle.jdbc.driver.OracleDriver");
	         Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
	         Statement st = con.createStatement();
	         ResultSet rs = st.executeQuery(sql);
	         
	         //PreparedStatement st = con.prepareStatement(sql);
	         //st.setInt(1, start);
	         //st.setInt(2, end);
	         
	         //ResultSet rs =st.executeQuery();
	         
	         while(rs.next()) {   
	            Spot spot = new Spot(
	                  rs.getInt("id"),
	                  rs.getString("name"),
	                  rs.getString("addr"),
	                  rs.getString("phone"),
	                  rs.getString("time"),
	                  rs.getString("time_etc"),
	                  rs.getString("dogsize"),
	                  rs.getString("dogsize_etc"),
	                  rs.getString("dogweight"),
	                  rs.getString("dogweight_etc"),
	                  rs.getString("price_min"),
	                  rs.getString("price_max"),
	                  rs.getString("price_etc"),
	                  rs.getString("url"),
	                  rs.getString("etc"),
	                  rs.getDate("regdate"),
	                  rs.getInt("themeid"),
	                  rs.getString("theme_etc"));
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

	@Override
	public List<Spot> getAdminList(int page) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Spot> getAdminList(String query) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Spot> getAdminList(int page, String query) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public List<Spot> getList(String search, String local, String theme, String size, String min_p, String max_p) {
		// TODO Auto-generated method stub
		List<Spot> list = new ArrayList<>();
		
		int themeid=0;
		
		if(theme.equals("카페"))
			themeid = 1;
		if(theme.equals("식당"))
			themeid = 2;
		if(theme.equals("놀이터"))
			themeid = 3;
		if(theme.equals("숙박"))
			themeid = 4;
		

		
		if(size.equals("소형견"))
			size = "소";
		if(size.equals("중형견"))
			size = "중";
		if(size.equals("대형견"))
			size = "대";
			
	
		if(min_p.equals(""))
			min_p="0";
		if(max_p.equals(""))
			max_p="2000000";
		
		
		String sql = "";
		
		if(themeid!=0)
			sql = "SELECT * FROM SPOT WHERE REGEXP_LIKE (NAME, '+"+search+"+') "
					+ "AND REGEXP_LIKE (ADDR, '+"+local+"+') AND REGEXP_LIKE (DOGSIZE, '+"+size+"+') "
					+ "AND THEMEID="+themeid+" AND TO_NUMBER(PRICE_MIN)>="+Integer.parseInt(min_p)+" AND TO_NUMBER(PRICE_MAX)<="+Integer.parseInt(max_p);
		else if(themeid==0)
			sql = "SELECT * FROM SPOT WHERE REGEXP_LIKE (NAME, '+"+search+"+') "
					+ "AND REGEXP_LIKE (ADDR, '+"+local+"+') AND REGEXP_LIKE (DOGSIZE, '+"+size+"+') "
					+ "AND TO_NUMBER(PRICE_MIN)>="+Integer.parseInt(min_p)+" AND TO_NUMBER(PRICE_MAX)<="+Integer.parseInt(max_p);
		
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";

		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot872");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);

			// PreparedStatement st = con.prepareStatement(sql);
			// st.setInt(1, start);
			// st.setInt(2, end);

			// ResultSet rs =st.executeQuery();

			while (rs.next()) {
				Spot spot = new Spot(
						rs.getInt("id"), 
						rs.getString("name"), 
						rs.getString("addr"), 
						rs.getString("phone"),
						rs.getString("time"), 
						rs.getString("time_etc"), 
						rs.getString("dogsize"),
						rs.getString("dogsize_etc"), 
						rs.getString("dogweight"), 
						rs.getString("dogweight_etc"),
						rs.getString("price_min"), 
						rs.getString("price_max"), 
						rs.getString("price_etc"),
						rs.getString("url"), 
						rs.getString("etc"), 
						rs.getDate("regdate"), 
						rs.getInt("themeid"),
						rs.getString("theme_etc")
						);
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
	public List<Favorite> getFavoriteList() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public int getReviewCount(int spotId) {
		// TODO Auto-generated method stub
		int result = 0;
		
		String sql = "select count(s.id) cnt from spot s inner join review r on s.id = r.spotid where s.id=? group by s.id";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl";
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url, "c##dogspot", "dogspot972");
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, spotId);
			
			ResultSet rs = st.executeQuery();
			
			if(rs.next()) 
				result = rs.getInt("cnt");
			
		
			
			rs.close();
			st.close();
			con.close();
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
		return result;
	}

}
