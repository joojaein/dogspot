package com.dogspot.web.controller.spot;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.SpotService;
import com.dogspot.web.service.jdbc.JdbcSpotService;
import com.google.gson.Gson;

@WebServlet("/spot-filter")
public class FilterController extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
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
		
		SpotService service = new JdbcSpotService();
		List<Spot> list = service.getList(search,local,theme,size,min_price,max_price);
		
		//request.setAttribute("list", list);
		Gson gson = new Gson();
	      String json = gson.toJson(list);
	      out.write(json);
		/*if(list ==null) {
			out.write("");
		}else {
			Gson gson = new Gson();
			String json = gson.toJson(list);
			out.write(json);	
		}*/
		
		
		
	}

}
