package com.dogspot.web.controller.review;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dogspot.web.service.ReviewService;
import com.dogspot.web.service.jdbc.JdbcReviewService;
import com.google.gson.Gson;

@WebServlet("/get-detail-imgs")
public class GetDetailImgsController extends HttpServlet{

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		System.out.println("GetReviewController");
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		resp.setCharacterEncoding("UTF-8");
	    PrintWriter out = resp.getWriter();

	    String reviewId = req.getParameter("reviewId");
	    List srcList = new ArrayList();

		ReviewService service = new JdbcReviewService();
		srcList = service.getReviewImgsSrc(Integer.parseInt(reviewId));
		
		
		if(srcList.size()==0) {
			srcList.add("/images/img404.png");
		}
	    
		Gson gson = new Gson();
		String json = gson.toJson(srcList);
		out.write(json);
	}
}



