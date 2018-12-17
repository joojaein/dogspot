package com.dogspot.web.controller.review;

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

@WebServlet("/review")
public class reviewListController extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
/*		IndexService service = new JdbcIndexService();
*/
		String paramFilter = req.getParameter("f");
		int filter = 1; //1:최신순  2:조회순 3:좋아요순 4:댓글순
		if(paramFilter != null && !paramFilter.equals("")) {
			filter=Integer.parseInt(paramFilter);
		}
		
		
		RequestDispatcher dispatcher = 
 				req.getRequestDispatcher("/WEB-INF/views/review/list.jsp");
		
/*		List<Spot> list = service.getFavoriteTop6();
		req.setAttribute("list",list);	*/	
		dispatcher.forward(req,resp);
	}
}
