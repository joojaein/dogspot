package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.entity.Cmt;
import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.google.gson.Gson;

@WebServlet("/cmt-action")
public class CmtController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();
	    
		ReviewService service = new JdbcReviewService();

	    String action = req.getParameter("action");
	    if(action.equals("insert")) {
	    	String regId = req.getParameter("regId");
			String reviewId = req.getParameter("reviewId");
			String content = req.getParameter("content");
			
			Cmt cmt = new Cmt(content, regId, Integer.parseInt(reviewId));
			service.insertCmt(cmt);
			
			Gson gson = new Gson();
			String json = gson.toJson(cmt);
			out.write(json);			
			return;
			
	    }
	    else if(action.equals("delete")) {
	    	
	    }
	    else if(action.equals("update")) {
	    	
	    }
		
		



	}
}



