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
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/spot/detail.jsp"); //Ȩ ���丮 /������ �����ϸ� WebContent��!! 
	
		
		int id = Integer.parseInt(request.getParameter("id")); //��� �� url?�ڿ� ���� �����ü��־�! ���Ķ���ʹ�! �����!
		
		SpotService service = new JdbcSpotService();
		Spot spot = service.getSpot(id);
		
		request.setAttribute("spot", spot);
		
	    dispatcher.forward(request,response);
	}
}
