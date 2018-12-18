package com.dogspot.web.service.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.IndexService;

public class JdbcIndexService implements IndexService {

	@Override
	public List<Spot> getFavoriteTop6() {
		List<Spot> list = new ArrayList<>();

		String sql = "SELECT * FROM (SELECT ROWNUM NUM, V.* FROM FAVORITE_DESC_VIEW V) WHERE NUM BETWEEN 1 AND 6";
		String url = "jdbc:oracle:thin:@211.238.142.251:1521:orcl"; 

		try {
			
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con = DriverManager.getConnection(url,"c##dogspot","dogspot872");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql); 	
			
			String sql2;

			while(rs.next()) {	
				sql2="SELECT * FROM SPOT WHERE ID="+rs.getInt("SPOTID");
				Class.forName("oracle.jdbc.driver.OracleDriver");
				Connection con2 = DriverManager.getConnection(url,"c##dogspot","dogspot872");
				Statement st2 = con2.createStatement();
				ResultSet rs2 = st2.executeQuery(sql2); 				
				rs2.next();
				
				Spot spot = new Spot(
						rs2.getInt("ID"),
						rs2.getString("NAME"));
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
	
}
