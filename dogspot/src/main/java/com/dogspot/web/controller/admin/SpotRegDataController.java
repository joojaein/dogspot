package com.dogspot.web.controller.admin;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;

@WebServlet("/admin-spot-reg")
public class SpotRegDataController extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		System.out.println("여기레그컨트롤러 잘들어왔단다..^^");
		
		String spotName = request.getParameter("spot-name");
		int themeId = Integer.parseInt(request.getParameter("theme"));
		String addr = request.getParameter("addr");
		String phone = request.getParameter("phone");
		String phone_two = request.getParameter("phone-two");
		
		Spot spot = new Spot(spotName,addr,themeId,phone+phone_two);
		
		System.out.println(spotName+","+themeId+","+addr+","+phone+","+phone_two);
		
		SpotService service = new JdbcSpotService();
		int regInsert = service.insert(spot);
		//int spotrequest = service.insertSpotRequest(spotId, memberId, title, content);
		if(regInsert==1)
			System.out.println("장소 잘넣었!");
		
		
	}

}
