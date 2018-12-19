package com.dogspot.web.controller.spot;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;

@WebServlet("/spot/list")
public class ListController extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.setContentType("text/html; charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		PrintWriter out = response.getWriter();
		
		String search = request.getParameter("search");
		String local = request.getParameter("local");
		String theme = request.getParameter("theme");
		String size = request.getParameter("size");
		String min_price = request.getParameter("min-price");
		String max_price = request.getParameter("max-price");
		
	
		if(search==null)
			search="";
		if(local==null)
			local="";
		if(theme==null)
			theme="";
		if(size==null)
			size="";
		if(min_price==null)
			min_price="0";
		if(max_price==null)
			max_price="2000000";
		/*int min_price = 0;
		int max_price = 0;
		
		if(min_price_!=null&&!min_price_.equals(""))
			min_price=Integer.parseInt(min_price_);
		if(max_price_!=null&&!max_price_.equals(""))
			max_price=Integer.parseInt(max_price_);*/
		
		SpotService service = new JdbcSpotService();
		
		List<Spot> list = service.getList(search,local,theme,size,min_price,max_price);
		
		//Gson gson = new Gson();
		
		//out.write(gson.toJson(list));
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/spot/list.jsp"); //Ȩ ���丮 /������ �����ϸ� WebContent��!! 
		request.setAttribute("list", list);
		
	    dispatcher.forward(request,response);
	}
	
}
