package com.dogspot.web.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Spot;
import com.dogspot.web.service.IndexService;
import com.dogspot.web.service.jdbc.JdbcIndexService;

@WebServlet("/index")
public class IndexController extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		IndexService service = new JdbcIndexService();
		
		RequestDispatcher dispatcher = 
 				req.getRequestDispatcher("/WEB-INF/views/index.jsp");
		
		List<Spot> list = service.getFavoriteTop6();
		req.setAttribute("list",list);		
		dispatcher.forward(req,resp);
		
	}
}
