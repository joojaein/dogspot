package com.dogspot.web.controller.spot;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;
import com.google.gson.Gson;

@WebServlet("/spot/detail")
public class DetailController extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/spot/detail.jsp"); //홈 디렉토리 /서부터 시작하면 WebContent다!! 
	
		
		int id = Integer.parseInt(request.getParameter("id")); //얘는 그 url?뒤에 값들 가져올수있어! 겟파라미터는! 명심좀!
		
		SpotService service = new JdbcSpotService();
		Spot spot = service.getSpot(id);
		
		request.setAttribute("spot", spot);
		
	    dispatcher.forward(request,response);
	}
}
