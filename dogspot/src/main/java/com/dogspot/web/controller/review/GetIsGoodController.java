package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.google.gson.Gson;

@WebServlet("/get-is-good")
public class GetIsGoodController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();

		String updown = req.getParameter("updown");
		String reviewId = req.getParameter("reviewId");
		
		ReviewService service = new JdbcReviewService();

		int result = service.getIsGood(Integer.parseInt(reviewId),"joojaein");
	
		out.print(result);	

	}
}



